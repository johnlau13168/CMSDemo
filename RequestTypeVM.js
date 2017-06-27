function RequestTypeViewModel() {
    var self = this;
  //  alert("getrequesttypelist call");
    self.requesttype = ko.observableArray([]);
    
   // alert(">>>>>>>>>>>>  context >>>>>" + "${pageContext.request.contextPath}");
         var urlx = "/itsmportal/itsm//srvrqs/servicerequest/getrequesttypelist";
           $.ajax({
						type: "GET",
						url: urlx,
						contentType: "application/json",
				        dataType: "json",
						cache: false,	
						async: false,
	    	success: function(JSONdataFromServer) {
        		     var mappedData = ko.utils.arrayMap(JSONdataFromServer, function(eachrequesttype) {
                         
        		    	 self.requesttype.push(eachrequesttype);
        		    	 
		    	      });
		              }
		        });
};
requesttypevm = new RequestTypeViewModel();
ko.applyBindings(requesttypevm, document.getElementById('templatelist'));



