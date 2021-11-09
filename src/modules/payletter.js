import axios from 'axios';

export async function postPayletter(payments, product_name, price) {
  await axios({
    method: 'POST',
    url: 'https://testpgapi.payletter.com/v1.0/payments/request',
    headers: {
      Authorization: 'PLKEY MTFBNTAzNTEwNDAxQUIyMjlCQzgwNTg1MkU4MkZENDA=',
    },
    data: {
      pgcode: `creditcard`,
      user_id: 'test_user_id',
      user_name: '테스터',
      service_name: '페이레터',
      client_id: 'pay_test',
      order_no: '1234567890',
      amount: 1000,
      taxfree_amount: 100,
      tax_amount: 20,
      product_name: `테스트`,
      email_flag: 'Y',
      email_addr: 'payletter@payletter.com',
      autopay_flag: 'N',
      receipt_flag: 'Y',
      custom_parameter: 'this is custom parameter',
      return_url: 'https://testpg.payletter.com/result',
      callback_url: 'https://testpg.payletter.com/callback',
      cancel_url: 'https://testpg.payletter.com/cancel',
    },
  })
    .then(res => console.log(res))
    .catch(error => console.log(error));
}
