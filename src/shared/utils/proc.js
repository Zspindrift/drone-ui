import { STATUS_PENDING, STATUS_RUNNING } from "shared/constants/status";

/**
 * Returns a process from the process tree with the
 * matching process number.
 *
 * @param {Object} procs - The process tree.
 * @param {number|string} pid - The process number.
 * @returns {Object}
 */
export const findChildProcess = (tree, pid) => {
	for (var i = 0; i < tree.length; i++) {
		const parent = tree[i];
		if (parent.pid == pid) {
			// eslint-disable-line
			return parent;
		}
		for (var ii = 0; ii < parent.children.length; ii++) {
			const child = parent.children[ii];
			if (child.pid == pid) {
				// eslint-disable-line
				return child;
			}
		}
	}
};

/**
 * Returns true if the process is in a completed state.
 *
 * @param {Object} proc - The process object.
 * @returns {boolean}
 */
export const assertProcFinished = proc => {
	return proc.state !== STATUS_RUNNING && proc.state !== STATUS_PENDING;
};

/**
 * Returns true if the process is running.
 *
 * @param {Object} proc - The process object.
 * @returns {boolean}
 */
export const assertProcRunning = proc => {
	return proc.state === STATUS_RUNNING;
};
