var $j=jQuery.noConflict();$j(document).on("ready",function(){if("undefined"==typeof oceanwpLocalize)return!1;var a=$j("#owp-qv-wrap"),t=$j("#owp-qv-content");$j(document).on("click",".owp-quick-view",function(e){e.preventDefault();var o=$j(this),n=$j(this).data("product_id");o.parent().addClass("loading"),$j.ajax({url:oceanwpLocalize.ajax_url,data:{action:"oceanwp_product_quick_view",product_id:n},success:function(e){var o=$j("html").innerWidth();$j("html").css("overflow","hidden");var n=$j("html").innerWidth();$j("html").css("margin-right",n-o),$j("html").addClass("owp-qv-open"),t.html(e),a.fadeIn(),a.addClass("is-visible");var r=t.find(".variations_form");r.trigger("check_variations"),r.trigger("reset_image");var i=t.find(".variations_form");i.length>0&&(i.wc_variation_form(),i.find("select").change());var d=t.find(".owp-qv-image");d.find("li").length>1&&d.flexslider();var c=t.find("form.grouped_form");if(c){var l=t.find("form.grouped_form").attr("action");c.find(".group_table, button.single_add_to_cart_button").hide(),c.append(' <a href="'+l+'" class="button">'+oceanwpLocalize.grouped_text+"</a>")}}}).done(function(){o.parent().removeClass("loading")})});var e=function(){$j("html").css({overflow:"","margin-right":""}),$j("html").removeClass("owp-qv-open"),a.fadeOut(),a.removeClass("is-visible"),setTimeout(function(){t.html("")},600)};$j(".owp-qv-overlay, .owp-qv-close").on("click",function(a){a.preventDefault(),e()}),$j(document).keyup(function(a){27==a.keyCode&&e()});var o=function(){$j(document.body).on("click","#owp-qv-content .product:not(.product-type-external) .single_add_to_cart_button",this.onAddToCart).on("added_to_cart",this.updateButton)};o.prototype.onAddToCart=function(a){a.preventDefault();var t=$j(this),e=$j(this).val(),o=$j('input[name="variation_id"]').val(),n=$j('input[name="quantity"]').val(),r=$j(this).closest(".variations_form"),i=r.find("select[name^=attribute]"),d={};t.removeClass("added"),t.addClass("loading"),i.length||(i=r.find("[name^=attribute]:checked")),i.length||(i=r.find("input[name^=attribute]")),i.each(function(){var a,t,e=$j(this),o=e.attr("name"),n=e.val();e.removeClass("error"),0===n.length?(a=o.lastIndexOf("_"),t=o.substring(a+1),e.addClass("required error").before("Please select "+t)):d[o]=n}),""!=o?$j.ajax({url:oceanwpLocalize.ajax_url,type:"POST",data:{action:"oceanwp_add_cart_single_product",product_id:e,variation_id:o,variation:d,quantity:n},success:function(a){$j(document.body).trigger("wc_fragment_refresh"),$j(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,t]),"yes"!==wc_add_to_cart_params.cart_redirect_after_add||(window.location=wc_add_to_cart_params.cart_url)}}):$j.ajax({url:oceanwpLocalize.ajax_url,type:"POST",data:{action:"oceanwp_add_cart_single_product",product_id:e,quantity:n},success:function(a){$j(document.body).trigger("wc_fragment_refresh"),$j(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,t]),"yes"!==oceanwpLocalize.cart_redirect_after_add||(window.location=oceanwpLocalize.cart_url)}})},o.prototype.updateButton=function(a,t,e,o){(o=void 0!==o&&o)&&(o.removeClass("loading"),o.addClass("added"),oceanwpLocalize.is_cart||0!==o.parent().find(".added_to_cart").length||o.after(' <a href="'+oceanwpLocalize.cart_url+'" class="added_to_cart wc-forward" title="'+oceanwpLocalize.view_cart+'">'+oceanwpLocalize.view_cart+"</a>"))},new o});