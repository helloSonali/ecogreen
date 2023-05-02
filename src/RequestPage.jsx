import React from 'react'

function RequestPage() {
  return (
    <React.Fragment>
    <div className="container">
    <section id="body" className="main-content">
        <div id="quote-request" className="mainbody">
        
       
          <h1>Request a Quote</h1>
          <p>Please tell us about your needs using the form below, and we will contact you and provide you with an accurate quotation.</p>
          <form id="frmQuoteRequest" name="frmQuoteRequest" method="post" action="/quote-request/5572" className="form-horizontal">
            <input name="__RequestVerificationToken" type="hidden" defaultValue="Urw3HNHzVRPKJImSfI3pCyzl07urrd-4DjVTmZvgzM1roifJUJaRr08l6zqyzmrQNLyY07S2E-ehwxmRuAZNAbNOpAtPcwYaDTCt_DRHR3M1" />
            <div className="reqform">
              <div className="form-group">
                <label className="col-sm-4 control-label">Request For</label>
                <div className="col-sm-8 reqitem">
                  New 8' x 8' x 8'H Walk-in Cooler
                  <br /><span className="light">68.00 Sq. Ft.</span>
                  <img src="/cms/products/5572/30964_list.jpg" alt="" width={125} height={125} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" ><span className="req">*</span> First Name</label>
                <div className="col-sm-8">
                  <input className="form-control"  maxLength={50} name="FirstName" type="text" defaultValue />
                  <em >Required</em>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" ><span className="req">*</span> Last Name</label>
                <div className="col-sm-8">
                  <input className="form-control"  maxLength={50} name="LastName" type="text" defaultValue />
                  <em >Required</em>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" >Company</label>
                <div className="col-sm-8">
                  <input className="form-control" maxLength={100} name="Company" type="text" defaultValue />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" >Address</label>
                <div className="col-sm-8">
                  <input className="form-control" id="txtAddress" maxLength={100} name="Address" type="text" defaultValue />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="txtCity">City</label>
                <div className="col-sm-8">
                  <input className="form-control" id="txtCity" maxLength={50} name="City" type="text" defaultValue />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="ddlState"><span className="req">*</span> State/Province</label>
                <div className="col-sm-8">
                  <select className="form-control"  name="State"><option value>Select...</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">Washington D.C.</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puetro Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    <option value="AB">Alberta</option>
                    <option value="BC">British Columbia</option>
                    <option value="MB">Manitoba</option>
                    <option value="NB">New Brunswick</option>
                    <option value="NL">Newfoundland and Labrador</option>
                    <option value="NS">Nova Scotia</option>
                    <option value="NT">Northwest Territories</option>
                    <option value="NU">Nunavut</option>
                    <option value="ON">Ontario</option>
                    <option value="PE">Prince Edward Island</option>
                    <option value="QC">Quebec</option>
                    <option value="SK">Saskatchewan</option>
                    <option value="YT">Yukon Territory</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="txtZip">Zip</label>
                <div className="col-sm-8">
                  <input className="form-control" maxLength={20} name="Zip" style={{maxWidth: '100px'}} type="text" defaultValue />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="ddlCountry">Country</label>
                <div className="col-sm-8">
                  <select className="form-control"  name="Country"><option value>Select...</option>
                    <option value="US">United States of America</option>
                    <option value="MX">Mexico</option>
                    <option value="CA">Canada</option>
                    <option value="AF">Afghanistan</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antartica</option>
                    <option value="AG">Antigua</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahama</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia</option>
                    <option value="BA">Bosnia &amp; Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Terr.</option>
                    <option value="VG">British Virgin Islands</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Cote D'ivoire (Ivory Coast)</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="TP">East Timor</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="FX">France, Metropolitan</option>
                    <option value="GF">French Guinea</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Terr.</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GB">Great Britian (U. K.)</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard &amp; McDonald Islands</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hugary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KR">Korea</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgystan</option>
                    <option value="LA">Lao</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxemborg</option>
                    <option value="MO">Macau</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="FM">Micronesia</option>
                    <option value="MD">Moldova</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="MS">Monserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="MP">N. Mariana Islands</option>
                    <option value="NA">Nambia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="AN">Netherlands Antilles</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Reunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="GS">S. Georgia/S. Sandwich Isl.</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome &amp; Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SH">St. Helena</option>
                    <option value="KN">St. Kitts &amp; Nevis</option>
                    <option value="PM">St. Pierre &amp; Miquelon</option>
                    <option value="VC">St. Vincent &amp; the Grenadines</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard &amp; Jan Mayen Islands</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania</option>
                    <option value="TH">Thailand</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad &amp; Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks &amp; Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UM">U. S. Minor Outlying Islands</option>
                    <option value="VI">U. S. Virgin Islands</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="ZZ">Unknown/unspecified country</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VA">Vatican City State</option>
                    <option value="VE">Venezuela</option>
                    <option value="VN">Vietnam</option>
                    <option value="WF">Wallis &amp; Futuna Islands</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="YU">Yugoslavia</option>
                    <option value="ZR">Zaire</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" ><span className="req">*</span> Phone</label>
                <div className="col-sm-8">
                  <input className="form-control"  maxLength={50} name="Phone" type="tel" defaultValue />
                  <em >Required</em>
                </div>
              </div>
             
              <div className="form-group">
                <label className="col-sm-4 control-label" ><span className="req">*</span> Email Address</label>
                <div className="col-sm-8">
                  <input className="form-control"  maxLength={100} name="Email" type="email" defaultValue />
                  <em >Required</em>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" ><span className="req">*</span> Enter Email Again</label>
                <div className="col-sm-8">
                  <input className="form-control"  maxLength={100} name="ConfirmEmail" type="email" defaultValue />
                  <em>Values must match</em>
                  
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" >Website</label>
                <div className="col-sm-8">
                  <div className="input-group">
                    <span className="input-group-addon">https://</span>
                    <input className="form-control"  maxLength={100} name="Website" placeholder="www.domain.com" type="text" defaultValue />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" > How did you hear about us?</label>
                <div className="col-sm-8">
                  <select className="form-control" id="ddlReferralMethod" name="ReferralMethod"><option value>Select...</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Bing Search">Bing Search</option>
                    <option value="Brochure">Brochure</option>
                    <option value="Customer Referral">Customer Referral</option>
                    <option value="Drive-by">Drive-by</option>
                    <option value="Friend">Friend</option>
                    <option value="Magazine Ad">Magazine Ad</option>
                    <option value="Past Customer">Past Customer</option>
                    <option value="Tradeshow">Tradeshow</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="txtPurchaseTimeframe">Purchasing Timeframe</label>
                <div className="col-sm-8">
                  <input className="form-control" id="txtPurchaseTimeframe" maxLength={50} name="PurchaseTimeframe" type="text" defaultValue />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="txtActualLength">Dimensions Needed</label>
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-4">
                      <input className="form-control" id="txtActualLength" maxLength={10} name="ActualLength" type="text" defaultValue />
                      <span className="help-block">Length</span>
                    </div>
                    <div className="col-sm-4">
                      <input className="form-control" id="txtActualWidth" maxLength={10} name="ActualWidth" type="text" defaultValue />
                      <span className="help-block">Width</span>
                    </div>
                    <div className="col-sm-4">
                      <input className="form-control" id="txtActualHeight" maxLength={10} name="ActualHeight" type="text" defaultValue />
                      <span className="help-block">Height</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label" htmlFor="txtMessageText">Comments/Notes</label>
                <div className="col-sm-8">
                  <textarea className="form-control" cols={20} id="txtMessageText" maxLength={2000} name="MessageText" rows={10} defaultValue={""} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-8 col-sm-offset-4">
                  <div className="g-recaptcha" data-sitekey="6LcsA7EaAAAAAKNaZVxtBIuhYxSKz9Qm6FJh0jKz" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-4 col-sm-8">
                  <input data-val="true" data-val-number="The field ProductID must be a number." id="hdnProductID" name="ProductID" type="hidden" defaultValue={5572} />
                  <button className="bluebtn" type="submit">Submit Request <i className="fa fa-chevron-right" /></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      </div>
    </React.Fragment>
  )
}

export default RequestPage