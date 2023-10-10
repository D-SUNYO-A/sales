export default class Vente {
  constructor(
    order_id,
    region,
    country,
    item_type,
    sales_channel,
    order_date,
    ship_date,
    units_sold,
    unit_price,
    unit_cost
  ) {
    this.order_id = order_id;
    this.region = region;
    this.country = country;
    this.item_type = item_type;
    this.sales_channel = sales_channel;
    this.order_date = order_date;
    this.ship_date = ship_date;
    this.units_sold = units_sold;
    this.unit_price = unit_price;
    this.unit_cost = unit_cost;
  }
}