import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app.js';
import connectDB from './config/db.js';

dotenv.config();

const PORT = 5001;

const runTests = async () => {
  console.log('Starting API Tests...');
  
  // Connect to DB
  await connectDB();
  
  // Listen on temporary port
  const server = app.listen(PORT, async () => {
    console.log(`Test server running on port ${PORT}`);
    
    try {
      // 1. Test POST /api/v1/plans
      console.log('\n--- Test 1: POST /api/v1/plans ---');
      const testPlan = {
        title: 'Roadtrip to Yosemite',
        location: 'Yosemite National Park',
        date: '2026-09-10T10:00:00.000Z',
        budget: 500,
        description: 'Collaborative roadtrip plan for the fall.',
        participants: ['Alice', 'Bob'],
        experiences: [{ name: 'Hiking', type: 'activity' }]
      };
      
      const postResponse = await fetch(`http://localhost:${PORT}/api/v1/plans`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(testPlan)
      });
      
      const postData = await postResponse.json();
      console.log('Status Code:', postResponse.status);
      console.log('Response Body:', JSON.stringify(postData, null, 2));
      
      if (postResponse.status !== 201 || !postData.success || !postData.data._id) {
        throw new Error('POST /api/v1/plans test failed');
      }
      console.log('✅ POST /api/v1/plans: PASSED');
      
      // 2. Test GET /api/v1/plans
      console.log('\n--- Test 2: GET /api/v1/plans ---');
      const getResponse = await fetch(`http://localhost:${PORT}/api/v1/plans`);
      const getData = await getResponse.json();
      console.log('Status Code:', getResponse.status);
      console.log('Count:', getData.count);
      console.log('First Item Title:', getData.data[0]?.title);
      
      if (getResponse.status !== 200 || !getData.success || typeof getData.count !== 'number' || !Array.isArray(getData.data)) {
        throw new Error('GET /api/v1/plans test failed');
      }
      console.log('✅ GET /api/v1/plans: PASSED');
      
      // 3. Test GET /api/v1/plans/:id
      console.log('\n--- Test 3: GET /api/v1/plans/:id ---');
      const planId = postData.data._id;
      
      // 3A: Valid ID
      console.log(`- Subtest A: Get plan with valid ID ${planId}`);
      const getSingleResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${planId}`);
      const getSingleData = await getSingleResponse.json();
      console.log('Status Code:', getSingleResponse.status);
      console.log('Title:', getSingleData.data?.title);
      if (getSingleResponse.status !== 200 || !getSingleData.success || getSingleData.data?._id !== planId) {
        throw new Error('GET /api/v1/plans/:id (Valid ID) test failed');
      }
      console.log('✅ Subtest A: PASSED');
      
      // 3B: Non-existent Valid ID
      const fakeId = '668be0f9b3e15b3c5825d199';
      console.log(`- Subtest B: Get plan with non-existent ID ${fakeId}`);
      const fakeResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${fakeId}`);
      const fakeData = await fakeResponse.json();
      console.log('Status Code:', fakeResponse.status);
      console.log('Error Message:', fakeData.message);
      if (fakeResponse.status !== 404 || fakeData.success !== false) {
        throw new Error('GET /api/v1/plans/:id (Non-existent ID) test failed');
      }
      console.log('✅ Subtest B: PASSED');

      // 3C: Invalid format ID
      const invalidId = 'invalid-id-123';
      console.log(`- Subtest C: Get plan with invalid format ID '${invalidId}'`);
      const invalidResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${invalidId}`);
      const invalidData = await invalidResponse.json();
      console.log('Status Code:', invalidResponse.status);
      console.log('Error Message:', invalidData.message);
      if (invalidResponse.status !== 400 || invalidData.success !== false) {
        throw new Error('GET /api/v1/plans/:id (Invalid format ID) test failed');
      }
      console.log('✅ Subtest C: PASSED');
      
      // 4. Test PATCH /api/v1/plans/:id
      console.log('\n--- Test 4: PATCH /api/v1/plans/:id ---');
      
      // 4A: Valid Update
      console.log(`- Subtest A: Update plan with valid properties`);
      const updateResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${planId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'Roadtrip to Yosemite (Updated)',
          budget: 750,
          status: 'active'
        })
      });
      const updateData = await updateResponse.json();
      console.log('Status Code:', updateResponse.status);
      console.log('Updated Title:', updateData.data?.title);
      console.log('Updated Budget:', updateData.data?.budget);
      console.log('Updated Status:', updateData.data?.status);
      if (
        updateResponse.status !== 200 || 
        !updateData.success || 
        updateData.data?.title !== 'Roadtrip to Yosemite (Updated)' || 
        updateData.data?.budget !== 750 ||
        updateData.data?.status !== 'active'
      ) {
        throw new Error('PATCH /api/v1/plans/:id (Valid update) test failed');
      }
      console.log('✅ Subtest A: PASSED');
      
      // 4B: Invalid Status Validation
      console.log(`- Subtest B: Try to update status with invalid value 'pending'`);
      const badValResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${planId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: 'pending'
        })
      });
      const badValData = await badValResponse.json();
      console.log('Status Code:', badValResponse.status);
      console.log('Error Message:', badValData.message);
      if (badValResponse.status !== 400 || badValData.success !== false) {
        throw new Error('PATCH /api/v1/plans/:id (Invalid validation) test failed');
      }
      console.log('✅ Subtest B: PASSED');
      
      // 4C: Non-existent ID
      console.log(`- Subtest C: Try to update plan with non-existent ID ${fakeId}`);
      const patchFakeResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${fakeId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: 'New Title'
        })
      });
      const patchFakeData = await patchFakeResponse.json();
      console.log('Status Code:', patchFakeResponse.status);
      console.log('Error Message:', patchFakeData.message);
      if (patchFakeResponse.status !== 404 || patchFakeData.success !== false) {
        throw new Error('PATCH /api/v1/plans/:id (Non-existent ID) test failed');
      }
      console.log('✅ Subtest C: PASSED');
      
      // 5. Test DELETE /api/v1/plans/:id
      console.log('\n--- Test 5: DELETE /api/v1/plans/:id ---');
      
      // 5A: Valid Delete
      console.log(`- Subtest A: Delete plan with ID ${planId}`);
      const deleteResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${planId}`, {
        method: 'DELETE'
      });
      const deleteData = await deleteResponse.json();
      console.log('Status Code:', deleteResponse.status);
      console.log('Message:', deleteData.message);
      if (deleteResponse.status !== 200 || !deleteData.success || deleteData.message !== 'Plan deleted successfully') {
        throw new Error('DELETE /api/v1/plans/:id (Valid delete) test failed');
      }
      console.log('✅ Subtest A: PASSED');
      
      // 5B: Verify deleted plan is gone
      console.log(`- Subtest B: Verify deleted plan cannot be retrieved`);
      const getDeletedResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${planId}`);
      const getDeletedData = await getDeletedResponse.json();
      console.log('Status Code:', getDeletedResponse.status);
      if (getDeletedResponse.status !== 404 || getDeletedData.success !== false) {
        throw new Error('DELETE verification (Plan retrieval) test failed');
      }
      console.log('✅ Subtest B: PASSED');
      
      // 5C: Non-existent ID
      console.log(`- Subtest C: Try to delete plan with non-existent ID ${fakeId}`);
      const deleteFakeResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${fakeId}`, {
        method: 'DELETE'
      });
      const deleteFakeData = await deleteFakeResponse.json();
      console.log('Status Code:', deleteFakeResponse.status);
      console.log('Error Message:', deleteFakeData.message);
      if (deleteFakeResponse.status !== 404 || deleteFakeData.success !== false) {
        throw new Error('DELETE /api/v1/plans/:id (Non-existent ID) test failed');
      }
      console.log('✅ Subtest C: PASSED');
      
      // 5D: Invalid format ID
      const invalidIdForDelete = 'invalid-id-for-delete';
      console.log(`- Subtest D: Try to delete plan with invalid format ID '${invalidIdForDelete}'`);
      const deleteInvalidResponse = await fetch(`http://localhost:${PORT}/api/v1/plans/${invalidIdForDelete}`, {
        method: 'DELETE'
      });
      const deleteInvalidData = await deleteInvalidResponse.json();
      console.log('Status Code:', deleteInvalidResponse.status);
      console.log('Error Message:', deleteInvalidData.message);
      if (deleteInvalidResponse.status !== 400 || deleteInvalidData.success !== false) {
        throw new Error('DELETE /api/v1/plans/:id (Invalid format ID) test failed');
      }
      console.log('✅ Subtest D: PASSED');
      
      console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY! 🎉');
    } catch (error) {
      console.error('❌ Test failed with error:', error.message);
    } finally {
      // Shutdown server and connection
      server.close(async () => {
        console.log('\nTest server closed.');
        await mongoose.connection.close();
        console.log('Database connection closed.');
        process.exit(0);
      });
    }
  });
};

runTests();