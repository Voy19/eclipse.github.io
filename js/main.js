// MENU HEADER

function hideMenu() {
	var x = document.getElementById('myTopnav');
	var icon = document.getElementById("icon");
   x.classList.toggle("responsive");
   if (x.classList.contains("responsive")) {
      icon.style.borderRadius = "10px 10px 0 0";
   } else {
      icon.style.borderRadius = "10px";
   }
}

function icon() {
	var width = $("body").width();
	var icon = $("#icon");
	if (width >= 768) {
		icon.style.display = "none";
	}
}

$(document).mouseup(function (e){ // событие клика по веб-документу 
	var x = document.getElementById('myTopnav');
	var icon = document.getElementById("icon");
	var div = $("#myTopnav"); // тут указываем ID элемента 
	if (!div.is(e.target) // если клик был не по нашему блоку 
	&& div.has(e.target).length === 0) { // и не по его дочерним элементам 
		if (x.classList.contains("responsive")) {
			x.classList.remove("responsive");
			icon.style.display = "block";
		} 
	} 
	});

	window.onscroll = function () {
		var icon = document.getElementById("icon");
		var scrolled = window.pageYOffset || document.documentElement.scrollTop;
		var x = document.getElementById('myTopnav');
		if (scrolled >= 1) {
			if (x.classList.contains("responsive")) {
				x.classList.remove("responsive");
				icon.style.display = "block";
			} 
		}
	};


// SELECT WRAPPER

var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < selElmnt.length; j++) {
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			var y, i, k, s, h;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			h = this.parentNode.previousSibling;
			for (i = 0; i < s.length; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					for (k = 0; k < y.length; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}

function closeAllSelect(elmnt) {
	var x, y, i, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	for (i = 0; i < y.length; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < x.length; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
document.addEventListener("click", closeAllSelect);


// MENU WORKS

var development = document.getElementById("development");
var design = document.getElementById("design");
var business = document.getElementById("business");
var arts = document.getElementById("arts");

var development_active = document.getElementById("development-active");
var design_active = document.getElementById("design-active");
var business_active = document.getElementById("business-active");
var arts_active = document.getElementById("arts-active");

development.addEventListener ("mouseover", function(){
	development_active.style.display = "flex";
	design_active.style.display = "none";
	business_active.style.display = "none";
	arts_active.style.display = "none";
});

design.addEventListener ("mouseover", function(){
	development_active.style.display = "none";
	design_active.style.display = "flex";
	business_active.style.display = "none";
	arts_active.style.display = "none";
});

business.addEventListener ("mouseover", function(){
	development_active.style.display = "none";
	design_active.style.display = "none";
	business_active.style.display = "flex";
	arts_active.style.display = "none";
	development.style.backgroundColor = "none";
});

arts.addEventListener ("mouseover", function(){
	development_active.style.display = "none";
	design_active.style.display = "none";
	business_active.style.display = "none";
	arts_active.style.display = "flex";
	development.style.backgroundColor = "none";
});





