// $(document).ready(function(){
// 		var sys = ign.sys();


// 		// $('#sys-info').click(function(){
// 		// 	document.getElementById('#info-distro').innerHTML = '<h1>'+  sys.cliOut('uname -a') +'</h1>';
// 		// 	$('div#info-distro').fadeIn();
// 		// });

// 		// $('#sys-dir').click(function(){
// 		// 	document.getElementById('#info-distro').innerHTML = '<pre>'+  sys.cliOut('ls /') +'</pre>';
// 		// 	$('div#info-distro').fadeIn();
// 		// });
// 	});
var sys = ign.sys();
$(document).ready(function () {
    $('#defaults').click(function () {
        sys.exec('libfm-pref-apps');
    });
    $('#desktop').click(function () {
        sys.exec('pcmanfm --desktop-pref');
    });
    $('#language').click(function () {
        sys.exec('/usr/bin/gnome-language-selector');
    });
    $('#startup').click(function () {
        sys.exec('lxsession-default-apps');
    });
    $('#appearance').click(function () {
        sys.exec('lxappearance');
    });
    $('#openbox').click(function () {
        sys.exec('obconf');
    });
    $('#plank').click(function () {
        sys.exec('planksettings.gambas');
    });
    $('#monitor').click(function () {
        sys.exec('lxrandr');
    });
    $('#keymouse').click(function () {
        sys.exec('lxinput');
    });
    $('#power').click(function () {
        sys.exec('xfce4-power-manager-settings');
    });
    $('#disks').click(function () {
        sys.exec('gnome-disks');
    });
    $('#printer').click(function () {
        sys.exec('system-config-printer');
    });
    $('#bluetooth').click(function () {
        sys.exec('blueman-manager');
    });
    $('#network').click(function () {
        sys.exec('nm-connection-editor');
    });
    $('#time').click(function () {
        sys.exec('time-admin');
    });
    $('#user').click(function () {
        sys.exec('users-admin');
    });
    $('#update').click(function () {
        sys.exec('software-properties-gtk');
    });
    $('#open-web').click(function () {
        sys.exec('xdg-open http://tealinuxos.org');
    });
    $('#dukungan').click(function () {
        sys.exec('xdg-open http://tealinuxos.org');
    });
    $('#hama').click(function () {
        sys.exec('xdg-open http://bug.tealinuxos.org');
    });
    document.getElementById('#tealinux').innerHTML = '<h3><strong>' + sys.cliOut('lsb_release -s -d') + '</strong></h3>';
    document.getElementById('#device').innerHTML = '<p>' + 'Device name: ' + sys.cliOut('uname -n') + '</p>';
    document.getElementById('#version').innerHTML = '<p>' + 'Version: ' + sys.cliOut('lsb_release -s -r') + '" ' + sys.cliOut('lsb_release -s -c') + '"' + ' ( ' + sys.cliOut('uname -p') + ' ) ' + '</p>';
    document.getElementById('#built').innerHTML = '<p>' + 'Built on: Ubuntu 13.10 ("Saucy")' + '</p>';
    // document.getElementById('#processor').innerHTML = '<p>'+  sys.cliOut('') +'</p>';
    // document.getElementById('#memory').innerHTML = '<p>'+  sys.cliOut('') +'</p>';
    // document.getElementById('#graphics').innerHTML = '<p>'+  sys.cliOut('') +'</p>';
    // document.getElementById('#storage').innerHTML = '<p>'+  sys.cliOut('') +'</p>';
});