declare namespace myLib{


    // Enforces the format of our test data

    // A template for 'product' test data
    interface Product{
        // Must have name
        name: string;
        // Must have description
        description: string;
        // Must have price
        price: string;
    }

    // Example one that we're not using in our framework
    interface CustomerDetails {
        name: string;
        address: string;
        // ? means that the vehicle details are optional
        vehicleDetails?: {
            make: string;
            model: string;
            date: {
                year: number;
                month: number;
                day: number;
            }
        }
    }

}