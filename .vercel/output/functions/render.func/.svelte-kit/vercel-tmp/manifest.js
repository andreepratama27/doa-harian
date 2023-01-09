export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/.DS_Store","fonts/sudo/.DS_Store","fonts/sudo/Makefile","fonts/sudo/Sudo-Bold.woff","fonts/sudo/Sudo-Bold.woff2","fonts/sudo/Sudo-BoldItalic.woff","fonts/sudo/Sudo-BoldItalic.woff2","fonts/sudo/Sudo-Italic.woff","fonts/sudo/Sudo-Italic.woff2","fonts/sudo/Sudo-Light.woff","fonts/sudo/Sudo-Light.woff2","fonts/sudo/Sudo-LightItalic.woff","fonts/sudo/Sudo-LightItalic.woff2","fonts/sudo/Sudo-Medium.woff","fonts/sudo/Sudo-Medium.woff2","fonts/sudo/Sudo-MediumItalic.woff","fonts/sudo/Sudo-MediumItalic.woff2","fonts/sudo/Sudo-Regular.woff","fonts/sudo/Sudo-Regular.woff2","fonts/sudo/Sudo-Thin.woff","fonts/sudo/Sudo-Thin.woff2","fonts/sudo/Sudo-ThinItalic.woff","fonts/sudo/Sudo-ThinItalic.woff2","fonts/sudo/SudoVariable.woff2","images/right-arrow.png"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-a110023f.js","imports":["_app/immutable/start-a110023f.js","_app/immutable/chunks/index-c3577ca2.js","_app/immutable/chunks/singletons-8a3cb1f1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/doa/[id]",
				pattern: /^\/doa\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
