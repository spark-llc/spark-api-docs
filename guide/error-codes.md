# Error Codes
Below are possible error codes that may be generated when dealing with station data.

## OnlineChargeAutomationBR0001
**Error Message:** *startTime* CANNOT be earlier than now!. \
**Error Description:** The startTime parameter cannot be retroactive. (Past data cannot be sent.)

## OnlineChargeAutomationBR0002
**Error Message:** *endTime* CANNOT be earlier than or equal to startTime! \
**Error Description:** The *endTime* parameter cannot be before or the same as the *startTime* parameter. (The end time cannot be earlier than or the same as the start time.)

## OnlineChargeAutomationBR0003
**Error Message:** NOT authorized for: "SKT/123!" \
**Error Description:** The user sending the data is not authorized for the specified socket. Charging network operators can only transact for the sockets of the stations connected to them.

## OnlineChargeAutomationBR0004
**Error Message:** Operation is NOT PERMITTED on past records! *startTime* is set and before now! \
**Error Description:** Retroactive records cannot be deleted. No changes are allowed to a retrospective record. For example, a price or reservation information from last week cannot be changed or deleted today.

## OnlineChargeAutomationBR0005
**Error Message:** Operation is NOT PERMITTED on past records! *endTime* is set and before now! \
**Error Description:** Retroactive records cannot be deleted. No changes are allowed to a retrospective record. For example, a price or reservation information from last week cannot be changed or deleted today.

## OnlineChargeAutomationBR0006
**Error Message:** Range from *startTime* to *endTime* CANNOT be more than 31 days! \
**Error Description:** The start and end date range cannot exceed 31 days. (A maximum of 31 days of data can be queried.)

## OnlineChargeAutomationBR0007
**Error Message:** *endTime* CANNOT be earlier than startTime! \
**Error Description:** During the query, the end date sent in the query criteria cannot be earlier than the start date.

## OnlineChargeAutomationBR0008
**Error Message:** Invalid value: 114.59 price CANNOT be less than or equal to 0.00 or greater than 100.00! \
**Error Description:** The price should be between 0-100.

## OnlineChargeAutomationBR0009
**Error Message:** Invalid value: 21.545785. price CANNOT have more decimal places than two. \
**Error Description:** The price can be a maximum of *2* digits after the comma.

## OnlineChargeAutomationBR0010
**Error Message:** date CANNOT be earlier than tomorrow! \
or \
PriceInfo CANNOT be sent after *5 P.M.* for tomorrow! \
**Error Description:** The date of the price cannot be before tomorrow. \
or \
Tomorrow's price information cannot be sent after 17:00.

## OnlineChargeAutomationBR0011
**Error Message:** CANNOT add PriceInfo. There is another record for specified date with ID : 123. Please update this record if you want to make changes. \
**Error Description:** Price information cannot be added for the same day. If price information has been sent for one day, a second price cannot be sent for the same day. If the price is to be changed, the record can be updated by specifying the ID information in the message.

## OnlineChargeAutomationBR0012
**Error Message:** Operation is NOT PERMITTED on past records! \
or \ 
Operation is NOT PERMITTED after 5 P.M. for tomorrow! \
**Error Description:** Retroactive records cannot be changed. No changes are allowed to a retrospective record. For example, a price or reservation information from last week cannot be changed or deleted today. \
or \
Tomorrow's price information cannot be sent after 17:00.

## OnlineChargeAutomationBR0013
**Error Message:** NOT authorized for : ŞRJ/123 ! \
**Error Description:** The user sending the data is not authorized for the specified Charging Station. Charging network operators can only transact for the Charging Stations connected to them.

## OnlineChargeAutomationBR0014
**Error Message:** status CANNOT be *'IN_USE'* for this operation! Use another status value. \
**Error Description:** It is the message received when the 'IN_USE' value is used other than the values specified for the status parameter in the addAvailabilityInfo method.

## OnlineChargeAutomationBR0015
**Error Message:** startTime CANNOT be updated! Use the same startTime which is :”startTimeFromDB” \
**Error Description:** It is the message indicating that the current startTime value in the database should be used when the startTime parameter in the updateAvailabilityInfo method should not be updated.

## OnlineChargeAutomationBR0016
**Error Message:** endTime CANNOT be before now! \
**Error Description:** The endTime parameter cannot be retroactive. (Cannot be before system clock.)

## OnlineChargeAutomationBR0017
**Error Message:** CANNOT start IN_USE. Socket "SKT/123" has been in use already. First end IN_USE using record id: "ID: 123" \
**Error Description:** It is the message received when it is desired to send data indicating that the usage has started again before the usage status is terminated for a socket that is currently being used. First, it indicates that the use case should be terminated with the endInUse method for the record with the specified id.