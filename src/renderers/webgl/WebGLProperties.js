/**
 * @author fordacious / fordacious.github.io
 */

function WebGLProperties() {

	var properties = {};

	function get( object ) {

		var uuid = object.uuid;
		var map = properties[ uuid ];

		if ( map === undefined ) {

			map = {};
			properties[ uuid ] = map;

		}

		return map;

	}

	function remove( object ) {

		delete properties[ object.uuid ];

	}

	function dispose() {

		properties = {};

	}

	return {
		get: get,
		remove: remove,
		dispose: dispose
	};

}


export { WebGLProperties };
