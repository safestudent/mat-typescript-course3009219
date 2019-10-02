Feature: Product Management

    Acceptance Criteria:
    - You must be able to add a Product

    Background: Ensure product isn't in the table
        Given a product doesn't exist
            | name    | description       | price |
            | carrots | orange vegetables | 10    |

    # You must be able to add a Product
    Scenario: A product is added
        When I add the product
        Then the product is created
