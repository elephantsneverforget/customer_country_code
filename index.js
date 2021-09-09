/*
Adds a add_user_props event to the DL
Contents of the event are merged with subsequent
Elevar DL events 
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