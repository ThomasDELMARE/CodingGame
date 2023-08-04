import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codingGame';

  // I first made two methods for each form but since most of the code repeat, I merged it to only one submit
  onSubmit(retrievedValue: string, methodToProcess: string) {
    var finalRetrievedValue = parseInt(retrievedValue)
    let htmlElement = <HTMLElement>document.getElementById('resultMinDays')

    // Changing the selected html element if not the right called method
    if(methodToProcess === "dayToReport") {
      htmlElement = <HTMLElement>document.getElementById('resultViralAdvertising')
    }

    // Verifying that parseInt went well, otherwise throw error
    if(isNaN(finalRetrievedValue) || finalRetrievedValue <= 0) {
      htmlElement.innerText = "Result : Input value is not a valid number";
      htmlElement.className = "";
      throw new Error("Input value is not a valid number");
    }
    else{
      // Verifying which method to process
      if(methodToProcess ==  "dayToReport"){
        var finalResult = viralAdvertising(finalRetrievedValue);
        htmlElement.innerText = "You'll have " + finalResult.toString() + " likes by the end of the day " + finalRetrievedValue + " !";
      }
      else {
        var finalResult = requiredMinimumDays(finalRetrievedValue);
        htmlElement.innerText = "You'll need " + finalResult.toString() + " days to reach " + finalRetrievedValue + " likes !";
      }
      // Showing the result
      htmlElement.className = "";
    }
  }
}

export function viralAdvertising(n: number): number {
  if(n <= 0) return 0;
  let shared = 5; // Shared at day 1
  let cumulativeLikes = 0; // Will allow us to get the cumulativelikes

  for (let i = 1; i <= n; i++) {
    const liked = Math.floor(shared / 2); // New liked value
    cumulativeLikes += liked; // Add new to existing likes
    shared = liked * 3; // Shares of n+1 = (likes of n) * 3
  }

  return cumulativeLikes;
}

export function requiredMinimumDays(n: number): number {
  if(n <= 0) return 0;
  let shared = 5;
  let cumulativeLikes = 0;
  let days = 0;

  // Looping until we reached the likes asked
  while (cumulativeLikes < n) {
    const liked = Math.floor(shared / 2);
    cumulativeLikes += liked;
    shared = liked * 3;
    days++; // Incrementing the days number until we reach the likes asked
  }

  return days;
}
