export function setUserProfile(data) {
  const userData = data.user_details;
  const orderData = data.order_data || [];
  const brokerDetail = data.broker_details || null;
  const simulatorData = data.add_on_subscription
  const user = userData;
  let isSimulatorPlan = 0
  let isNiftyPlan = 0
  if (orderData.length > 0){
    const isSimulatorActive = orderData.filter((item) => (item.subscription_type == 3 || item.subscription_type == 4) && item.is_active == 'A')
    if (isSimulatorActive.length > 0)
    {
      isSimulatorPlan = 1
    }

    const isActive = orderData.filter((item) => (item.subscription_type == 2 || item.subscription_type == 4) && item.is_active == 'A')
    if (isActive.length > 0)
    {
      isNiftyPlan = 1
    }
  }
  // if (orderData.length > 0) {
  //   plan = orderData.map((item) => {
  //     const planOrderJson = JSON.parse(item.order_plans_json);
  //     return {
  //       order_id: item['order_id'],
  //       order_date_time: item['order_date_time'],
  //       start_date: item['start_date'],
  //       end_date: item['end_date'],
  //       plan_name: planOrderJson[0].plan_name,
  //       plan_pricing: planOrderJson[0].plan_amount_paid,
  //       is_active: item['is_active'],
  //     };
  //   });
  // }

  return {
    user: user,
    plan: orderData || [],
    brokerData: brokerDetail || null,
    simulatorMemberShip : isSimulatorPlan,
    primeMemberShip : isNiftyPlan
  };
};

