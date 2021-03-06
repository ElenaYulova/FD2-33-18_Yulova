"use strict"

function validateText(text){
    if (typeof text != "string" || text == ""){
        return false;
    } else {
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



function spanAlert(inputName, spanID, ff) {
    if (!ff) {
        spanID.style.visibility = "visible";
        
        return false;
    } else {
        spanID.style.visibility = "hidden";
        return true; 
    }
}
var developer = feedback.elements.developer;
developer.onblur = function () {validateDev(false)};
developer.oninput = function () {validateDev(false)};
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
var siteName = feedback.elements.siteName;
siteName.onblur = function () {validateSiteName(false)};
siteName.oninput = function () {validateSiteName(false)};
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
var siteUrl = feedback.elements.siteUrl;
siteUrl.onblur = function () {validateSiteUrl(false)};
siteUrl.oninput = function () {validateSiteUrl(false)};
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
var startDate = feedback.elements.startDate;
startDate.onblur = function () {validateStartDate(false)};
startDate.oninput = function () {validateStartDate(false)};
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

var visitors = feedback.elements.visitors;
visitors.onblur = function () {validateVisitors(false)};
visitors.oninput = function () {validateVisitors(false)};
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

var email = feedback.elements.email;
email.onblur = function () {validateMail(false)};
email.oninput = function () {validateMail(false)};
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

var section = feedback.elements.section;

feedback.onchange = function () {validateSection(false); validatePlacing(false); ValidateReview(false)};
feedback.onclick = function () {validateSection(false); validatePlacing(false); ValidateReview(false)};
section.onclick = function () {validateSection(false)};
section.onchange = function () {validateSection(false)};
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

var placing = feedback.elements.section;
placing.onchange = function () {validatePlacing(false)};
placing.onclick = function () {validatePlacing(false)};
function validatePlacing(toFocus) {
    var ok = true;
    var placing = feedback.elements.placing;
    var spanID = document.getElementById("placingErr");
    var placing1 = document.getElementById("placing1");
    var placing2 = document.getElementById("placing2");
    var placing3 = document.getElementById("placing3");
    if (placing1.checked || placing2.checked || placing3.checked) {
        ok = true;

    } else {
        ok = false;
    }
    spanAlert(placing, spanID, ok);
    
    
    
    return ok;
    
}

var review = feedback.elements.section;
review.onchange = function () {ValidateReview(false)};
review.onclick = function () {ValidateReview(false)};
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
var description = feedback.elements.description;
description.onblur = function () {validateDescription(false)};
description.oninput = function () {validateDescription(false)};
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

