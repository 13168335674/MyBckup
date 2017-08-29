<script>
	function formatDate(date, fmt) {	//formatDate(毫秒数,返回的时间格式(YYYY-MM-DD hh:mm:ss))
		date = new Date(date);	
		if (/(Y+)/.test(fmt)) {		// 正则匹配连续的多个Y
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));	
			// 替换字符串中正则匹配的字符串(YYYY),注意将Number转化为String
		}
		let o = {
			'M+': date.getMonth() + 1,	// getMouth()记得加一
			'D+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds()
		};
		for (let k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + '';
				//	将Number转化为String
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
				// 正则匹配字符串，检验正则匹配的字符个数( MM||M ) ,长度为1时，直接替换，不为1则调用函数为str长度为个位时左边添加0
			}
		}
		console.log(fmt);	// 2005-03-18 09:58:31	
		return fmt;	//最终返回fmt数据格式
	}
	function padLeftZero(str) {
		return ('00' + str).substr(str.length);
	}
	formatDate(1111111111111,'YYYY-MM-DD hh:mm:ss');
</script>
