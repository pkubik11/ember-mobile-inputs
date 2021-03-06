import Service from '@ember/service';
import Evented from '@ember/object/evented';

export default Service.extend(Evented, {
	publish: function () {
		return this.trigger.apply(this, arguments);
	},
	subscribe: function () {
		return this.on.apply(this, arguments);
	},
	unsubscribe: function () {
		return this.off.apply(this, arguments);
	}
});
