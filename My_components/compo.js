$.fn.extend({
	tableConcat : function(option){
		var htmlData = [],
		tableHtml = '',
		$this = $(this);

		$.each(option.list,function(idx,val){
			var trData = '<tr>';
			var obj = val;

			$.each(option.tags,function(index,item){
				var buffer = item.class?'<td class='+item.class+'">' + obj[item.text] +'</td>':'<td>' + obj[item] +'</td>';
				trData += buffer;
			});
			trData += '</tr>';
			htmlData.push(trData);
		});
		tableHtml = htmlData.join("");

		$this.find('tbody').empty().append(tableHtml);
	},
});