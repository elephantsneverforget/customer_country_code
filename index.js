/*
Adds a add_user_props event to the DL
Contents of the event are merged with subsequent
Elevar DL events

Insert this code prior to the GTM Suite data layer
event you want merge data with.

For ex. 
ElevarGtmSuite.utils.pushToDataLayer({... // Our push
window.ElevarGtmSuite.handlers._event_({ // Event you want to effect

Depending on context you may want to use the following script presence check
window.addEventListener('load', () => {
  if(window.ElevarGtmSuite){
    // Custom code here...
    // window.ElevarGtmSuite.utils.pushToDataLayer({event: "hello"})
  }
});

The example below is tied into the order processing notes
and uses a preexisting script presence check.
*/



if (config.event_config.checkout_complete && Shopify.Checkout && Shopify.Checkout.page === "thank_you") {
    ElevarGtmSuite.utils.pushToDataLayer({
        "event": "add_user_props",
        "ecommerce": {
            "userProperties": {
                "customer_country_code": {{- customer.default_address.country | json -}},
            }
        }
    });
}