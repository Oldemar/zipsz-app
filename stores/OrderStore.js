import { observable, action, decorate } from "mobx";

class OrderStore {

    orderStatus = 1;
    orderMessages = [
        {
            id: 1,
            slug: 'awaiting',
            text: 'Awaiting ',
            description: 'Waiting to be delivered',
        },
        {
            id: 2,
            slug: 'sent',
            text: 'Sent to driver',
            description: '',
        },
        {
            id: 3,
            slug: 'onitsway',
            text: 'Being delivered',
            description: '',
        }
    ];
}

decorate(OrderStore, {
        orderStatus: observable,
        orderMessages: observable,
    });


const orderStore = new OrderStore();

export default orderStore;
