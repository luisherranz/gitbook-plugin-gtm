module.exports = {
	hooks: {
		page: function(page) {
		  debugger;
		  if (this.options.pluginsConfig.gtm.virtualPageViews) {
		    dataLayer = dataLayer || [];
		    dataLayer.push({
		          'event':'virtualPageView',
		          'page':{
		            'title': page.title,
		            'path': page.path,
		          }
		        });
	    }
	    return page;
	}
};
