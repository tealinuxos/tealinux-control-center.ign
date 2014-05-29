var sys = ign.sys();
	$(document).ready(function() {
		$('#defaults').click(function() {
			sys.exec('libfm-pref-apps');
		});
		$('#desktop').click(function() {
			sys.exec('pcmanfm --desktop-pref');
		});
		$('#language').click(function() {
			sys.exec('/usr/bin/gnome-language-selector');
		});
		$('#startup').click(function() {
			sys.exec('lxsession-default-apps');
		});
		$('#appearance').click(function() {
			sys.exec('lxappearance');
		});
		$('#openbox').click(function() {
			sys.exec('obconf');
		});
		$('#monitor').click(function() {
			sys.exec('lxrandr');
		});
		$('#keymouse').click(function() {
			sys.exec('lxinput');
		});
		$('#power').click(function() {
			sys.exec('xfce4-power-manager-settings');
		});
		$('#disks').click(function() {
			sys.exec('gnome-disks');
		});
		$('#printer').click(function() {
			sys.exec('');
		});
		$('#bluetooth').click(function() {
			sys.exec('');
		});
		$('#network').click(function() {
			sys.exec('nm-connection-editor');
		});
		$('#time').click(function() {
			sys.exec('time-admin');
		});
		$('#user').click(function() {
			sys.exec('users-admin');
		});
		$('#update').click(function() {
			sys.exec('software-properties-gtk');
		});
	});
