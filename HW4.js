db.widgetSales.aggregate([
    { $project: { date: 1, item: 1, monthlySales: { $multiply: [ "$price", "$quantity" ] } } },
    { $group: {
        _id: {
            $dateToString: {format: "%Y-%m-%d", date: $ISODate}
        },
        average: {$avg: $monthlySales},
        month: {$first: {$month: $monthlySales}
    }},
    { $out :"widgetSalesMonthlyAgg"}
])


2. 
The quickest method would be the find method with only productName and status.
db.orders.find({}, {productName: 1, status: 1})