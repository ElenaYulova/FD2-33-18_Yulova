"use strict"

function validateText(text){
    if (typeof text != "string" || text == ""){
        return false;
    } else {
        return true;
    }    
}
function spanAlert(inputName, spanID, ff) {
    if (!ff) {
        spanID.style.visibility = "visible";
        
        return false;
    } else {
        spanID.style.visibility = "hidden";
        return true; 
    }
}
var feedback = document.forms.feedback; 

feedback.addEventListener('submit', validation, false);
function validation(EO) {
    EO = EO || window.event;
    var ok = true;
    ok = ok && validateDev(ok);
    ok = ok && validateSiteName(ok);
    ok = ok && validateSiteUrl(ok);
    ok = ok && validateStartDate(ok);
    ok = ok && validateVisitors(ok);
    ok = ok && validateMail(ok);
    ok = ok && validateSection(ok);
    ok = ok && validatePlacing(ok);
    ok = ok && ValidateReview(ok);
    ok = ok && validateDescription(ok);
    if (!ok) {
        EO.preventDefault();
        validate();       
    }
}

function validate() {
    validateDev();
    validateSiteName();
    validateSiteUrl();
    validateStartDate();
    validateVisitors();
    validateMail();
    validateSection();
    validatePlacing();
    ValidateReview();
    validateDescription(); 
}

var developer = feedback.elements.developer;
developer.addEventListener("blur", function () {validateDev(false)}, false);
developer.addEventListener("input", function () {validateDev(false)}, false);

var siteName = feedback.elements.siteName;
siteName.addEventListener("blur", function () {validateSiteName(false)}, false);
siteName.addEventListener("input", function () {validateSiteName(false)}, false);

var siteUrl = feedback.elements.siteUrl;
siteUrl.addEventListener("blur", function () {validateSiteUrl(false)}, false);
siteUrl.addEventListener("input", function () {validateSiteUrl(false)}, false);

var startDate = feedback.elements.startDate;
startDate.addEventListener("blur", function () {validateStartDate(false)});
startDate.addEventListener("input", function () {validateStartDate(false)});

var visitors = feedback.elements.visitors;
visitors.addEventListener("blur", function () {validateVisitors(false)});
visitors.addEventListener("input", function () {validateVisitors(false)});

var email = feedback.elements.email;
email.addEventListener("blur", function () {validateMail(false)});
email.addEventListener("input", function () {validateMail(false)});

var section = feedback.elements.section;
section.addEventListener("change", function () {validateSection(false)});
section.addEventListener("click", function () {validateSection(false)});

var placing1 = feedback.elements.placing1;
placing1.addEventListener("change", function () {validatePlacing(false)});
var placing2 = feedback.elements.placing2;
placing2.addEventListener("change", function () {validatePlacing(false)});
var placing3 = feedback.elements.placing3;
placing3.addEventListener("change", function () {validatePlacing(false)});


var review = feedback.elements.review;
review.addEventListener("change", function () {ValidateReview(false)});
review.addEventListener("click", function () {ValidateReview(false)});

var description = feedback.elements.description;
description.addEventListener("blur", function () {validateDescription(false)});


function validateDev(toFocus) {
    var ok = true;
    var dev = feedback.elements.developer;
    var txt = dev.value;
    var spanID = document.getElementById("developerErr");
    ok = validateText(txt);
    spanAlert(dev, spanID, ok);
    if (toFocus) dev.focus(); 
    return ok;
}

function validateSiteName(toFocus) {
    var ok = true;
    var siteName = feedback.elements.siteName;
    var txt = siteName.value;
    var spanID = document.getElementById("siteNameErr");
    ok = validateText(txt);
    spanAlert(siteName, spanID, ok);
    if (toFocus) siteName.focus(); 
    return ok;
}

function validateSiteUrl(toFocus) {
    var ok = true;
    var siteUrl = feedback.elements.siteUrl;
    var txt = siteUrl.value;
    var spanID = document.getElementById("siteUrlErr");
    ok = validateText(txt);
    spanAlert(siteUrl, spanID, ok);
    if (toFocus) siteUrl.focus(); 
    return ok;
}

function validateStartDate(toFocus) {
    var ok = true;
    var startDate = feedback.elements.startDate;
    var txt = startDate.value;
    var spanID = document.getElementById("startDateErr");
    ok = validateText(txt);
    spanAlert(startDate, spanID, ok);
    if (toFocus) startDate.focus(); 
    return ok;
}

function validateVisitors(toFocus) {
    var ok = true;
    var visitors = feedback.elements.visitors;
    var txt = visitors.value;
    var spanID = document.getElementById("visitorsErr");
    ok = validateText(txt);
    spanAlert(visitors, spanID, ok);
    if (toFocus) visitors.focus(); 
    return ok;
}

function validateMail(toFocus) {
    var ok = true;
    var email = feedback.elements.email;
    var txt = email.value;
    var spanID = document.getElementById("emailErr");
    ok = validateText(txt);
    spanAlert(email, spanID, ok);
    if (toFocus) email.focus(); 
    return ok;
}

function validateSection(toFocus) {
    var ok = true;
    var section = feedback.elements.section;
    var spanID = document.getElementById("sectionErr");
    if (section.value == 0) {
        ok = false;
    }
    spanAlert(section, spanID, ok);
    if (toFocus) section.focus(); 
    return ok;
}

function validatePlacing(toFocus) {
    var ok = true;
    var placing = feedback.elements.placing;
    var spanID = document.getElementById("placingErr");
    var placing1 = document.getElementById("placing1");
    var placing2 = document.getElementById("placing2");
    var placing3 = document.getElementById("placing3");
    if (!placing1.checked && !placing2.checked && !placing3.checked) {
        ok = false;

    } else {
        ok = true;
    }
    spanAlert(placing, spanID, ok);  
    if (toFocus) section.focus(); 
    return ok; 
}

function ValidateReview(toFocus) {
    var ok = true;
    var review = feedback.elements.review;
    var spanID = document.getElementById("reviewErr");
    var ch1 = document.getElementById("ch1");
    if (!сh1.checked) {
        ok = false;
    }
    spanAlert(review, spanID, ok);
   if (toFocus) review.focus(); 
    return ok;
}

function validateDescription(toFocus) {
    var ok = true;
    var description = feedback.elements.description;
    var txt = description.value;
    var spanID = document.getElementById("descriptionErr");
    ok = validateText(txt);
    spanAlert(description, spanID, ok);
    if (toFocus) description.focus(); 
   
    return ok;
}
