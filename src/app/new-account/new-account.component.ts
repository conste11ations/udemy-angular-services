import { Component, EventEmitter, Output } from "@angular/core";
import { AccountsService } from "../accounts.service";
import { LoggingService } from "../logging.service";
@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService, AccountsService],
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{ name: string; status: string }>();
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus,
    // });
    this.loggingService.logStatusChange(accountStatus); // injecting the service
    // const service = new LoggingService(); // THIS IS WRONG
    // service.logStatusChange(accountStatus); // THIS IS WRONG
    // console.log("A server status changed, new status: " + accountStatus);
  }
}
