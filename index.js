module.exports = {
	hooks: {
		page: function(page) {
		  if (this.options.pluginsConfig.gtm.virtualPageViews) {
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
