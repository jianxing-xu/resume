/**
 * 顺序执行异步任务
 * @param  {...Function} tasks
 */


function processTask(...tasks) {
	const queue = [...tasks];
	let paused = false;
	const result = [];
	async function run() {
		return new Promise(async (resolve) => {
			while (queue.length) {
				const task = queue.shift();
				try {
					const r = await task();
					result.push(r);
				} finally {
					if (paused) {
						console.log("Process paused! 剩余任务：" + queue.length + "个");
						break
					};
					run();
				}
			}
			if (!queue.length) {
				console.log("All Task Done!", result);
				resolve(result);
			}
			return result;
		})
	}
	return {
		async start() {
			paused = false;
			const r = await run();
			return r;
		},
		pause() {
			paused = true;
		}
	}
}

function task1() {
	console.log("do task1");
	return "task1 result"
}
async function task2() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("async do task2");
			resolve("task 2 result");
		}, 4000);
	})
}
function task3() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log("do promise task3 after 5s");
			resolve("task3 result");
		}, 8000)
	});
}
