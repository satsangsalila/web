jQuery(document).ready(function($) {

	         var tableObj=[
			{
				id : "1",
				month : "January",
				downliadLink : "./assets/pdf/11-1-SATSANG.pdf",
				year:2019
			},
			{
				id : "2",
				month : "February" ,
				downliadLink : "./assets/pdf/SATSANGPRADEEP FEBRUARY 2019.pdf",
				year:2019
			},
			{
				id : "3",
				month : "March",
				downliadLink : "./assets/pdf/MARCH 2019.pdf",
				year:2019
			},
			{
				id : "4",
				month : "April",
				downliadLink : "./assets/pdf/APRIL 2019.pdf",
				year:2019
			},
			{
				id : "5",
				month : "May",
				downliadLink : "./assets/pdf/Satsang Pradeep MAY 2019 FINAL.pdf",
				year:2019
			},
			{
				id : "6",
				month : "June",
				downliadLink : "./assets/pdf/JJUNE 2019 SATSANG PRADEEP.pdf",
				year:2019
			},
			{
				id : "7",
				month : "July",
				downliadLink : "./assets/pdf/JULY 2019 SATSANG PRADIP.pdf",
				year:2019
			},
			{
				id : "8",
				month : "August",
				downliadLink : "./assets/pdf/AUGUST 2019 SATSANG PRADEEP.pdf",
				year:2019
			},
			{
				id : "9",
				month : "September",
				downliadLink : "./assets/pdf/SEPT_2019_ SATSANGPRADEEP.pdf",
				year:2019
			},
			{
				id : "10",
				month :"October",
				downliadLink : "./assets/pdf/SATSANG PRADIP OCTOBER 2019.pdf",
				year:2019
			},
			{
				id : "11",
				month : "November",
				downliadLink : "./assets/pdf/Satsang Pradeep NOVEMBER 2019.pdf",
				year:2019
			},
				{
				id : "12",
				month : "January",
				downliadLink : "./upload/pdf/2020/January-SATSANG-Pradeep-2020.pdf",
				year:2020
			},
			{
				id : "13",
				month : "February",
				downliadLink : "./assets/pdf/FEBRUARY SATSANG PRADIP 2020.pdf",
				year:2020
			},
			{
				id : "14",
				month : "March",
				downliadLink : "./upload/pdf/2020/march/MARCH-2020-SATSANG-PRADEEP.pdf",
				year:2020
			},
			{
				id : "15",
				month : "April",
				downliadLink : "",
				year:2020
			},
			{
				id : "16",
				month : "May",
				downliadLink : "",
				year:2020
			},
			{
				id : "17",
				month : "June",
				downliadLink : "./upload/pdf/2020/JUNE-SATSANG-PRADEEP-2020.pdf",
				year:2020
			},
			{
				id : "18",
				month : "July",
				downliadLink : "./upload/pdf/2020/July-SATSANG-Pradeep-2020.pdf",
				year:2020
			},
			{
				id : "19",
				month : "August",
				downliadLink : "./upload/pdf/2020/August-SATSANG-Pradeep-2020.pdf",
				year:2020
			},
			{
				id : "20",
				month : "September",
				downliadLink : "./upload/pdf/2020/September-SATSANG-PRADEEP-2020.pdf",
				year:2020
			},
			{
				id : "21",
				month : "October",
				downliadLink : "./upload/pdf/2020/OCTOBER-SATSANG-PRADEEP-2020.pdf",
				year:2020
			},
			{
				id : "22",
				month : "November",
				downliadLink : "./upload/pdf/2020/November-Satsang-Pradeep-2020.pdf",
				year:2020
			},
			 {
				id : "23",
				month : "December",
				downliadLink : "./upload/pdf/2020/December-Satsang-Pradeep-2020.pdf",
				year:2020
			},
			 {
				id : "24",
				month : "January",
				downliadLink : "./upload/pdf/2021/January-Satsang-Pradeep-2021.pdf",
				year:2021
			},
			 {
				id : "25",
				month : "February",
				downliadLink : "./upload/pdf/2021/February-Satsang-Pradeep-2021.pdf",
				year:2021
			},
			 {
				id : "26",
				month : "March",
				downliadLink : "./upload/pdf/2021/March-Satsang-Pradeep-2021.pdf",
				year:2021
			},
			  {
				id : "27",
				month : "April",
				downliadLink : "./upload/pdf/2021/April-Satsang-Pradeep-2021.pdf",
				year:2021
			}
		];
		 var bookObj=[
			{
				id : "1",
				bookName : "Nimit Matra - 1",
				part:"1",
				downliadLink : "./assets/pdf/Nimitmatra-Part-I.pdf"
			},
			 {
				id : "2",
				bookName : "Nimit Matra - 3",
				part:"3",
				downliadLink : "./assets/pdf/Nimitmatra-Part-III.pdf"
			},
				{
				id : "3",
				bookName : "Nimit Matra - 4",
				part:"4",
				downliadLink : "./assets/pdf/Nimitmatra-Part-IV.pdf"
			},
				{
				id : "4",
				bookName : "Amrut Varsha - 1",
				part:"1",
				downliadLink : "./assets/pdf/AmrutVarshaPart-I.pdf"
			},
			{
				id : "5",
				bookName : "Amrut Varsha - 2",
				part:"2",
				downliadLink : "./assets/pdf/AmrutVarshaPart-II.pdf"
			},
			{
				id : "6",
				bookName : "Astak Kirtan",
				part:"",
				downliadLink : "./assets/pdf/AstakKirtan.pdf"
			},
			{
				id : "7",
				bookName : "Satsang Sudha",
				part:"",
				downliadLink : "./upload/pdf/2020/april/Satsang Sudha.pdf"
			},
			{
				id : "8",
				bookName : "Smruti Ank",
				part:"",
				downliadLink : "./assets/pdf/SATSANG PRADEEP.pdf"
			},
		]
			
		var yearsArray = [];
		var selectedyear = new Date().getFullYear();
		// adding unique years to yearsArray
		$.each(tableObj, function (index) {
			var year = tableObj[index].year;
			if ($.inArray(year, yearsArray) == -1) {
				yearsArray.push(year);
			}
		});
		//sorting the year 
		yearsArray.sort();
		var $yearDropDown = $("#DropDown_Year");
		var $container = $("#satsang-pradip-list");
		//To update the table element with selected items
		updateTable = function (collection) {
			$container.empty();
			var downloadData;
			for (var i = 0; i < collection.length; i++) {
			if(collection[i]["downliadLink"]){
				downloadData="<a href='"+collection[i]["downliadLink"]+"'>Download</a>";
			}
			else{
				downloadData="<span>Not Published</span>";
			}
				
				$container.append("<tr><td>" + (i+1) + "</td><td>" + collection[i].month + "</td><td>" + downloadData + "</td></tr>");
			}
		}
		setData = function (selectedyear){
			makesArray = jQuery.grep(tableObj, function (detail, i) {
				return detail.year == selectedyear;
			});
			
			updateTable(makesArray);
		}
		
		$.each(yearsArray, function (i) {
			$yearDropDown.append('<option value="' + yearsArray[i] + '" + selected="'+ selectedyear +'">' + yearsArray[i] + '</option>');
		});
		setData(selectedyear);
		$yearDropDown.change(function () {
			selectedyear = this.value;
			//filter based on  selected year.
			setData(selectedyear);
		});
				
		//book list binding
		for(var i=0;i<bookObj.length;i++)
		{			
			var tr="<tr>";
			var tdData1="<td>"+ (i+1) +"</td>";
			var tdData2="<td>"+bookObj[i]["bookName"]+"</td>";			
			var tdData3="<td> <a href='"+bookObj[i]["downliadLink"]+"'>Download</a></td></tr>";			
		    $("#book-list").append(tr+tdData1+tdData2+tdData3); 		  
		}

});
