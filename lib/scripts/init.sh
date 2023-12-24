yabai_path=$1
display_skhd_mode=$2
enable_window_title_changed_signal=$3

pgrep -x yabai > /dev/null

if [ $? -eq 1 ]; then
  echo "yabaiError"
  exit 0
fi

SIP=$(csrutil status)
shadow_enabled=$($yabai_path -m config window_shadow)

spaces=$($yabai_path -m query --spaces)
windows=$($yabai_path -m query --windows | sed 's/\\.//g; s/\n//g')
displays=$($yabai_path -m query --displays)

if [ -z "$spaces" ]; then
    spaces=$($yabai_path -m query --spaces)
fi

if [ -z "$windows" ]; then
    windows=$($yabai_path -m query --windows | sed 's/\\.//g; s/\n//g')
fi

if [ -z "$displays" ]; then
    displays=$($yabai_path -m query --displays)
fi

$yabai_path -m signal --add event=window_focused action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar when focused application changes"
$yabai_path -m signal --add event=window_resized action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar when a window is resized"
$yabai_path -m signal --add event=window_destroyed action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar when an application window is closed"
$yabai_path -m signal --add event=space_changed action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar on space change"
$yabai_path -m signal --add event=display_changed action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar on display focus change"

if [ $enable_window_title_changed_signal = "true" ]; then
    $yabai_path -m signal --add event=window_title_changed action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar when current window title changes"
fi

yabai_major_version=$($yabai_path -v | awk -F '.' '{print $1}' | sed 's/yabai-v//')
if [ $yabai_major_version -ge 6 ]; then
    $yabai_path -m signal --add event=space_destroyed action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar on space removal"
    $yabai_path -m signal --add event=space_created action="osascript -e 'tell application id \"tracesOf.Uebersicht\" to refresh widget id \"simple-bar-index-jsx\"'" label="Refresh simple-bar on space creation"
fi

if [ $display_skhd_mode = "true" ]; then
  SCRIPT_DIR=$(cd $(dirname "${BASH_SOURCE[0]}") && pwd)
  skhd_mode=$(cat "$("${SCRIPT_DIR}"/yabai-set-mode.sh --query)")
else
  skhd_mode="{}"
fi


echo $(cat <<-EOF
  {
    "spaces": $spaces,
    "windows": $windows,
    "displays": $displays,
    "SIP": "$SIP",
    "shadow": "$shadow_enabled",
    "skhdMode": $skhd_mode
  }
EOF
)
