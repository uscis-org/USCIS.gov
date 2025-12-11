---
layout: default
title: "Welcome to USCIS"
permalink: /
---

{% include banner.html 
   text="Official website of U.S. Citizenship and Immigration Services"
   alert=false %}

<section class="usa-section">
  <div class="grid-container">
    <div class="grid-row grid-gap">
      <div class="tablet:grid-col-8">
        <h1>Manage your immigration journey</h1>
        <p class="usa-intro">
          We provide information and services to help you with citizenship, 
          green cards, work permits, and other immigration benefits.
        </p>
        
        <a class="usa-button usa-button--big" href="/forms/">
          Find Forms
        </a>
        
        <div class="margin-top-4">
          <h2>Check Your Case Status</h2>
          <form class="usa-form" action="/tools/case-status/" method="get">
            <label class="usa-label" for="receipt-number">
              Receipt Number
            </label>
            <input class="usa-input" id="receipt-number" 
                   name="receipt" type="text">
            <button class="usa-button" type="submit">
              Check Status
            </button>
          </form>
        </div>
      </div>
      
      <div class="tablet:grid-col-4">
        <div class="usa-card">
          <div class="usa-card__container">
            <header class="usa-card__header">
              <h2 class="usa-card__heading">Quick Links</h2>
            </header>
            <div class="usa-card__body">
              <ul class="usa-list">
                <li><a href="#">Fee Calculator</a></li>
                <li><a href="#">Office Locator</a></li>
                <li><a href="#">Processing Times</a></li>
                <li><a href="#">Policy Manual</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>