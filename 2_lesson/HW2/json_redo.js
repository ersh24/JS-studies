function redo(operations) {
  const new_obj={}
  let ind = 0
  operations.forEach(function(item,i,operations){
    //console.log(item.date);
    if (!(item.date in new_obj)){
      new_obj[item.date]={links:[]};
    const links = item['links'];
    console.log(links)
    links.forEach(function(item2, n, links) {
    new_obj[item.date]["links"].push(item2);
          });
          ind ++
        };
      });
return console.log(new_obj)}

redo(operations)
