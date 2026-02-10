import requests
import sys
import json
from datetime import datetime

class LawyerLandingPageAPITester:
    def __init__(self, base_url="https://previdencia-mecatti.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.created_contact_id = None

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json() if response.text else {}
                    if response_data:
                        print(f"   Response: {json.dumps(response_data, indent=2, default=str)}")
                except:
                    print(f"   Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")

            return success, response.json() if response.text and success else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_root_endpoint(self):
        """Test the root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_create_contact(self):
        """Test creating a new contact form submission"""
        test_data = {
            "name": "João Silva",
            "email": "joao.silva@email.com",
            "phone": "(11) 99999-9999",
            "message": "Gostaria de saber sobre aposentadoria por tempo de contribuição. Tenho 30 anos de contribuição e preciso de orientação sobre meus direitos."
        }
        
        success, response = self.run_test(
            "Create Contact Form",
            "POST",
            "contact/",
            201,
            data=test_data
        )
        
        if success and 'id' in response:
            self.created_contact_id = response['id']
            print(f"   Created contact ID: {self.created_contact_id}")
        
        return success

    def test_get_all_contacts(self):
        """Test getting all contact form submissions"""
        success, response = self.run_test(
            "Get All Contacts",
            "GET",
            "contact/",
            200
        )
        
        if success:
            print(f"   Found {len(response)} contacts")
        
        return success

    def test_get_contact_by_id(self):
        """Test getting a specific contact by ID"""
        if not self.created_contact_id:
            print("❌ Skipping - No contact ID available")
            return False
            
        success, response = self.run_test(
            "Get Contact by ID",
            "GET",
            f"contact/{self.created_contact_id}",
            200
        )
        return success

    def test_update_contact_status(self):
        """Test updating contact status"""
        if not self.created_contact_id:
            print("❌ Skipping - No contact ID available")
            return False
            
        update_data = {"status": "contacted"}
        
        success, response = self.run_test(
            "Update Contact Status",
            "PATCH",
            f"contact/{self.created_contact_id}",
            200,
            data=update_data
        )
        return success

    def test_delete_contact(self):
        """Test deleting a contact"""
        if not self.created_contact_id:
            print("❌ Skipping - No contact ID available")
            return False
            
        success, response = self.run_test(
            "Delete Contact",
            "DELETE",
            f"contact/{self.created_contact_id}",
            204
        )
        return success

    def test_get_nonexistent_contact(self):
        """Test getting a non-existent contact (should return 404)"""
        fake_id = "non-existent-id-12345"
        
        success, response = self.run_test(
            "Get Non-existent Contact",
            "GET",
            f"contact/{fake_id}",
            404
        )
        return success

    def test_invalid_contact_data(self):
        """Test creating contact with invalid data"""
        invalid_data = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "phone": "123",  # Too short phone
            "message": "Hi"  # Too short message
        }
        
        success, response = self.run_test(
            "Create Contact with Invalid Data",
            "POST",
            "contact/",
            422  # Validation error
        )
        return success

def main():
    print("🚀 Starting Lawyer Landing Page API Tests")
    print("=" * 60)
    
    tester = LawyerLandingPageAPITester()
    
    # Test sequence
    tests = [
        ("Root Endpoint", tester.test_root_endpoint),
        ("Create Contact", tester.test_create_contact),
        ("Get All Contacts", tester.test_get_all_contacts),
        ("Get Contact by ID", tester.test_get_contact_by_id),
        ("Update Contact Status", tester.test_update_contact_status),
        ("Get Non-existent Contact", tester.test_get_nonexistent_contact),
        ("Invalid Contact Data", tester.test_invalid_contact_data),
        ("Delete Contact", tester.test_delete_contact),
    ]
    
    for test_name, test_func in tests:
        try:
            test_func()
        except Exception as e:
            print(f"❌ {test_name} failed with exception: {str(e)}")
    
    # Print final results
    print("\n" + "=" * 60)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    sys.exit(main())