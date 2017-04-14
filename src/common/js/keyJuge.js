export function keyJuge(code,person) {
	if (person === 2) {
		if (code === 87 || code === 65 || code === 83 || code === 68 || code === 32 || code === 78 || code === 81 ) {
			return true;
		} else {
			return false;
		}
	} else if (person === 1) {
		if (code === 38 || code === 37 || code === 39 || code === 40 || code === 32 || code === 78 || code === 191 ) {
			return true;
		} else {
			return false;
		}
	}
}