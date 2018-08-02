import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../customer.service';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})

export class SearchCustomersComponent implements OnInit {

  startWith = new Subject()
  endWith = new Subject()
  customers: any[]
  
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.findCustomers(this.startWith, this.endWith)
                        .subscribe(customers => this.customers = customers)
  }
  
  search($event) {
      const queryText = $event.target.value
      this.startWith.next(queryText)
      this.endWith.next(queryText + '\uf8ff')
  }

}
