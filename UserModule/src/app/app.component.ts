import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public http:Http) {
	  this.getUserDetails();
   }
  ngOnInit(){
    
$(document).ready(function()
{
    /* smooth scrolling for scroll to top */
	$('#to-top').bind('click', function()
	{
		$('body,html').animate({
			scrollTop: 0}, 
			2500);
	});

	//Easing Scroll replace Anchor name in URL and Offset Position
	$(function(){
		$('a[href*=#]:not([href=#])').click(function()
		{
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top -420
					}, 3500, 'easeOutBounce');
					return false;
				}
			}
		});
	});
});
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});


$(document).ready(function()
{
	
	// Closes the sidebar menu on menu-close button click event
	$("#menu-close").click(function(e)							//declare the element event ...'(e)' = event (shorthand)
	{
																// - will not work otherwise")
		$("#sidebar-wrapper").toggleClass("active");			//instead on click event toggle active CSS element
		e.preventDefault(); 									//prevent the default action ("Do not remove as the code
	});															//Close 'function()'

	// Open the Sidebar-wrapper on Hover
	$("#menu-toggle").hover(function(e)							//declare the element event ...'(e)' = event (shorthand)
	{
		$("#sidebar-wrapper").toggleClass("active",true);		//instead on click event toggle active CSS element
		e.preventDefault();										//prevent the default action ("Do not remove as the code
	});

	$("#menu-toggle").bind('click',function(e)					//declare the element event ...'(e)' = event (shorthand)
	{
		$("#sidebar-wrapper").toggleClass("active",true);		//instead on click event toggle active CSS element
		e.preventDefault();										//prevent the default action ("Do not remove as the code
	});															//Close 'function()'

	$('#sidebar-wrapper').mouseleave(function(e)				//declare the jQuery: mouseleave() event 
																// - see: ('//api.jquery.com/mouseleave/' for details)
	{
		/*! .toggleClass( className, state ) */
		$('#sidebar-wrapper').toggleClass('active',false);		/* toggleClass: Add or remove one or more classes from each element
																in the set of matched elements, depending on either the class's
																presence or the value of the state argument */
		e.stopPropagation();									//Prevents the event from bubbling up the DOM tree
																// - see: ('//api.jquery.com/event.stopPropagation/' for details)
																
		e.preventDefault();										// Prevent the default action of the event will not be triggered
																// - see: ('//api.jquery.com/event.preventDefault/' for details)
	});
});
// Closes the sidebar menu on menu-close button click event
$("#menu-close").click(function(e)							//declare the element event ...'(e)' = event (shorthand)
{
															// - will not work otherwise")
	$("#sidebar-wrapper").toggleClass("active");			//instead on click event toggle active CSS element
	e.preventDefault(); 									//prevent the default action ("Do not remove as the code
	

});	
  }

// ===========================================get category an all =====================================
cat_record; scat_record; sscat_record;brd_record;pro_record;
getUserDetails(){ 	
	this.http.get("catapi/getcategory").subscribe(this.cbcat)
	this.http.get("catapi/getscategory").subscribe(this.cbscat)
	 this.http.get("catapi/getsscategory").subscribe(this.cbsscat)
	 this.http.get("catapi/getbrand").subscribe(this.cbbrd)
	// this.http.get("productapi/getproduct").subscribe(this.cbpro)
}

cbcat=(cat)=>{ this.cat_record=JSON.parse(cat._body)}
cbscat=(sc)=>{ this.scat_record=JSON.parse(sc._body)}
 cbsscat=(ssc)=>{ this.sscat_record=JSON.parse(ssc._body)}
 cbbrd=(bd)=>{ this.brd_record=JSON.parse(bd._body)}
// cbpro=(p)=>{ this.pro_record=JSON.parse(p._body)}
}
