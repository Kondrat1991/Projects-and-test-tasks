import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Customer} from './customer';

@Injectable()
export class CustomerService {

  private dbPath: string = '/customers';

  customer: FirebaseObjectObservable<Customer> = null;
  customers: FirebaseListObservable<Customer[]> = null;

  constructor(private db: AngularFireDatabase) {}

  getCustomer(key: string): FirebaseObjectObservable<Customer> {
    this.customer = this.db.object(`${this.dbPath}/${key}`);
    return this.customer;
  }

  createCustomer(customer: Customer): void {
    this.customers.push(customer).catch(error => this.handleError(error));
  }

  updateCustomer(key: string, value: any): void {
    this.customers.update(key, value).catch(error => this.handleError(error));
  }

  deleteCustomer(key: string): void {
    this.customers.remove(key).catch(error => this.handleError(error));
  }

  getCustomersList(query = {}): FirebaseListObservable<Customer[]> {
    this.customers = this.db.list(this.dbPath, {
      query: query
    });
    return this.customers;
  }

  getCustomers(numberItems, startKey?): FirebaseListObservable<Customer[]> {
    this.customers = this.db.list(this.dbPath, {
      query: {
        orderByKey: true,
        startAt: startKey,
        limitToFirst: numberItems + 1
      }
    });
    
    return this.customers;
  }
  
  findCustomers(start, end): FirebaseListObservable<Customer[]> {
    return this.db.list(this.dbPath, {
      query: {
        orderByChild: 'name',
        limitToFirst: 6,
        startAt: start,
        endAt: end
      }
    });
  }

  deleteAll(): void {
    this.customers.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }
}
