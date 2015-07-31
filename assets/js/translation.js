$(document).ready(function(){
 var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

 i18n.setLng(params.lang, function(t) { 
     $(".nav").i18n();
     $('#appname').text($.t('app.name'));
     $('#apptitle').text($.t('app.title'));
     $('#greywrap_last_tech_litle').text($.t('greywrap.last_tech_title'));
     $('#greywrap_last_tech_description').text($.t('greywrap.last_tech_description'));
  });
 });