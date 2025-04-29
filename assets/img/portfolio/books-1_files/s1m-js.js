/*! Additional site specific scripting */

/*! Image title overlay */
jQuery( document ).ready(function() {
jQuery( ".imgmod-rollover a" ).addClass( "s1m_txt_image" );
jQuery('.et_pb_image.imgmod-rollover').each(function(){
let getTitle = jQuery(this).find('img').attr('title');
let getOverlay = jQuery(this).find('.s1m_txt_image');
jQuery('<span class="s1m_overlay"><h2>' + getTitle + '</h2></span>').appendTo(getOverlay);
});
});