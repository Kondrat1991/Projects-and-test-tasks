import {Component, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';

import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

import * as ARR from 'lodash';

@Component({
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;
  numberItems = 2;
  nextKey: any;
  prevKeys: any[] = [];
  subscription: any;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomersList();
  }
  
  getCustomersList(key?) {
    if (this.subscription) this.subscription.unsubscribe()
    
    this.subscription = this.customerService.getCustomers(this.numberItems, key)
                          .subscribe(customers => {
                              this.customers = ARR.slice(customers, 0, this.numberItems)
                              this.nextKey = ARR.get(customers[this.numberItems], '$key')
                          })
  }
  
  onNext() {
    this.prevKeys.push(ARR.first(this.customers)['$key'])
    this.getCustomersList(this.nextKey)
  }
  
  onPrev() {
    const prevKey = ARR.last(this.prevKeys) // get last key
    this.prevKeys = ARR.dropRight(this.prevKeys) // delete last key
    
    this.getCustomersList(prevKey)
  }

  deleteCustomers() {
    this.customerService.deleteAll()
  }
}
