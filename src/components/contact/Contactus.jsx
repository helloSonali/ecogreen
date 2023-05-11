import React from 'react'

function Contactus() {
  return (
   <React.Fragment>
   <section className="tm-main-body-section">
   <section className="container">
     <div className="row">
       <div className="col-xs-12">
         <h1>Contact Us</h1>
         <h2>We'd love to hear from you!</h2>
         <p>
           If you're having trouble, please check our <a href="../pilates-help/0/Articles-2.html">FAQs</a> (Frequently Asked Questions) page.
         </p>
         <p>To connect with a specific teacher online, visit the <a href="../pilates-instructors-2.html">Teachers Page</a>.</p>
       </div> 
     </div> 
     <div className="row">
       <div className="col-sm-8 col-md-6 col-lg-5">
         <h3>Email</h3>	
         <form name="CFForm_1" id="CFForm_1" action="https://www.pilatesanytime.com/about/contact.cfm" method="post" onsubmit="return _CF_checkCFForm_1(this)">
           <div className="form-group">
             <label htmlFor="contact_reason_id">What are you contacting us about today?</label>
             <select className="form-control" name="contact_reason_id">
               <option value={-1}>--Please Make a Selection--</option>
               <option value={3}>I'd like to cancel my subscription</option>
               <option value={6}>How to reset my Password</option>
               <option value={5}>The cost of Pilates Anytime</option>
               <option value={4}>The videos are not playing correctly</option>
               <option value={1}>I'm having trouble logging in</option>
               <option value={7}>Data deletion request</option>
               <option value={2}>Something else (not listed above).</option>
             </select>
           </div>
           <p>
             <button type="submit" className="btn btn-primary">Continue</button>
           </p>
           <input type="hidden" name="action" defaultValue="check_reason" />
         </form>
       </div> 
       <div className="col-sm-4 col-md-6 col-lg-7">
         <h3>Call Us</h3>
         <p>
           <strong>(424) 999-1700</strong><br />
           Office Hours (Pacific Time):<br />
           Monday - Friday, 9am - 5pm 
         </p>
         <h3>Mailing Address</h3>
         <p>
           Pilates Anytime<br />
           531 Main Street #303<br />
           El Segundo, CA 90245
         </p>
       </div> 
     </div> 
   </section>
   <div className="tm-divider" />
 </section>
   </React.Fragment>
  )
}

export default Contactus