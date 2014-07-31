		var listener = document.getElementById('listener');
		listener.addEventListener('progress', moduleLoadProgress, true);
		listener.addEventListener('error', moduleLoadError, true);
		listener.addEventListener('load', moduleDidLoad, true);
		listener.addEventListener('loadend', moduleDidEndLoad, true);
		listener.addEventListener('message', moduleMessage, true);
		
		switch (browserSupportStatus) {
			case browser_version.BrowserChecker.StatusValues.NACL_ENABLED:
				break;
			case browser_version.BrowserChecker.StatusValues.UNKNOWN_BROWSER:
				setError('Unknown Browser');
				break;
			case browser_version.BrowserChecker.StatusValues.CHROME_VERSION_TOO_OLD:
				setError('Chrome too old: You must use Chrome version 15 or later.');
				break;
			case browser_version.BrowserChecker.StatusValues.NACL_NOT_ENABLED:
				setError('NaCl disabled: Native Client is not enabled.<br>' +
					'Please go to <b>chrome://plugins</b> and enable Native Client ' +
					'plugin.');
				break;
			case browser_version.BrowserChecker.StatusValues.NOT_USING_SERVER:
				setError('file: URL detected, please use a web server to host Native ' +
					'Client applications.');
				break;
			default:
				setError('Unknown error: Unable to detect browser and/or ' +
					'Native Client support.');
				break;
		}
