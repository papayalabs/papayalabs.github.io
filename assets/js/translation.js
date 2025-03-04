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
     $('#made_in').text($.t('app.made_in'));
     $('#created_by').text($.t('app.created_by'));
     $('#greywrap_litle_1').text($.t('greywrap.title_1'));
     $('#greywrap_description_1').text($.t('greywrap.description_1'));
     $('#greywrap_litle_2').text($.t('greywrap.title_2'));
     $('#greywrap_description_2').text($.t('greywrap.description_2'));
     $('#greywrap_litle_3').text($.t('greywrap.title_3'));
     $('#greywrap_description_3').text($.t('greywrap.description_3'));
     $('#about_title').text($.t('about.about_title'));
     $('#about_description_1').text($.t('about.about_description_1'));
     $('#about_description_2').html($.t('about.about_description_2'));
     $('#divider_title_1').text($.t('divider_1.divider_title'));
     $('#divider_description_1').text($.t('divider_1.divider_description'));
     $('#divider_title_2').text($.t('divider_2.divider_title'));
     $('#divider_description_2').text($.t('divider_2.divider_description'));
     $('#divider_title_3').text($.t('divider_3.divider_title'));
     $('#divider_description_3').text($.t('divider_3.divider_description'));
     $('#portfolio_title').text($.t('portfolio.title'));
     $('#portfolio_take_a_look').text($.t('portfolio.take_a_look'));
     $('#portfolio_take_a_look_2').text($.t('portfolio.take_a_look'));
     $('#portfolio_take_a_look_3').text($.t('portfolio.take_a_look'));
     $('#portfolio_take_a_look_4').text($.t('portfolio.take_a_look'));
     $('#portfolio_take_a_look_5').text($.t('portfolio.take_a_look'));
     $('#portfolio_take_a_look_6').text($.t('portfolio.take_a_look'));
     $('#portfolio_visite_site').text($.t('portfolio.visite_site'));
     $('#portfolio_visite_site_2').text($.t('portfolio.visite_site'));
     $('#portfolio_visite_site_3').text($.t('portfolio.visite_site'));
     $('#portfolio_visite_site_4').text($.t('portfolio.visite_site'));
     $('#portfolio_visite_site_5').text($.t('portfolio.visite_site'));
     $('#portfolio_visite_site_6').text($.t('portfolio.visite_site'));
     $('#portfolio_name_1').text($.t('portfolio.name_1'));
     $('#portfolio_description_1').text($.t('portfolio.description_1'));
     $('#portfolio_name_2').text($.t('portfolio.name_2'));
     $('#portfolio_description_2').text($.t('portfolio.description_2'));
     $('#portfolio_name_3').text($.t('portfolio.name_3'));
     $('#portfolio_description_3').text($.t('portfolio.description_3'));
     $('#portfolio_name_4').text($.t('portfolio.name_4'));
     $('#portfolio_description_4').text($.t('portfolio.description_4'));
     $('#portfolio_name_5').text($.t('portfolio.name_5'));
     $('#portfolio_description_5').text($.t('portfolio.description_5'));
     $('#portfolio_name_6').text($.t('portfolio.name_6'));
     $('#portfolio_description_6').text($.t('portfolio.description_6'));
     $('#services_title').text($.t('services.title'));
     $('#services_description_1').text($.t('services.description_1'));
     $('#services_description_2').text($.t('services.description_2'));
     $('#services_description_3').text($.t('services.description_3'));
     $('#services_description_4').text($.t('services.description_4'));
     $('#services_review_1').text($.t('services.review_1'));
     $('#services_review_2').text($.t('services.review_2'));
     $('#services_review_3').text($.t('services.review_3'));
     $('#services_review_4').text($.t('services.review_4'));
     $('#services_author_1').text($.t('services.author_1'));
     $('#services_author_2').text($.t('services.author_2'));
     $('#services_author_3').text($.t('services.author_3'));
     $('#services_author_4').text($.t('services.author_4'));
     $('#address').text($.t('contact.address'));
     $('#register_code').text($.t('contact.register_code'));
     $('#phone').text($.t('contact.phone'));
     $('#thanks').text($.t('contact.thanks'));
     $('#contact_info').text($.t('contact.contact_info'));
     $('#title_1').text($.t('contact.title_1'));
     $('#title_2').text($.t('contact.title_2'));
     $('#description_1').text($.t('contact.description_1'));
     $('#description_2').text($.t('contact.description_2'));

  });
 });