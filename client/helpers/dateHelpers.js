Template.registerHelper('formatDate',function(datetime){
    if(moment && datetime){
        return moment(datetime).format('MM/DD/YYYY');
    } else{
        return datetime;
    }
});
