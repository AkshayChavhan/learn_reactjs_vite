> What is MONGODB
> Common Query Operations
> Aggregation Framework Examples
> Indexing in MongoDB



////////////////////////////////////////////////      START      \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

## What is MONGODB ?

- Its open-source NoSQL database management system with category of a document-oriented database.
- flexible, scalable, and high-performance solution for handling various types of data


Key characteristics of MongoDB:

1) Document-Oriented:
MongoDB stores data in flexible, JSON-like BSON (Binary JSON) documents.
These documents can have varying structures

2) NoSQL Database:
MongoDB is part of the NoSQL (Not Only SQL) database family. Unlike traditional relational databases.
NoSQL databases are designed to handle unstructured or semi-structured data and provide more flexibility in data modeling.

3) Schema-less:
MongoDB is schema-less, which means that you can insert documents without needing to predefine the structure of the data.
This flexibility is beneficial in scenarios where data structures evolve over time.

4) Scalability:
MongoDB supports horizontal scalability through a process called sharding.
Sharding involves distributing data across multiple servers, enabling MongoDB to handle large and growing datasets.

5) High Performance:
MongoDB can provide high performance for both read and write operations.
It includes features such as indexing, which significantly improves query performance.

6) Aggregation Framework:
MongoDB's aggregation framework allows for the processing and transformation of data on the server side.
It supports operations such as filtering, grouping, and projecting, making it suitable for complex analytics.

7) Security Features:
MongoDB includes security features such as authentication, authorization, and encryption. Access controls can be defined at the collection and database levels.



---------------------------------------------------------------------------------------------------------------------------------

## Common Query Operations


| Query Operation                  | Description                                                  | Example                                                    |
|----------------------------------|--------------------------------------------------------------|------------------------------------------------------------|
| **Find Documents**               |                                                              |                                                            |
| `db.collection.find()`           | Retrieve documents based on a query.                         | `db.users.find({ age: 25 })`                                |
| `db.collection.findOne()`        | Retrieve a single document based on a query.                 | `db.users.findOne({ name: "John" })`                       |
| `db.collection.find().limit()`   | Limit the number of documents returned.                      | `db.users.find().limit(5)`                                  |
| `db.collection.find().sort()`    | Sort documents based on specified fields.                    | `db.users.find().sort({ age: 1 })`                         |
| `db.collection.find().count()`   | Count the number of documents matching a query.              | `db.users.find({ status: "active" }).count()`              |
| **Query Operators**              |                                                              |                                                            |
| `$eq`                            | Matches values that are equal to a specified value.          | `db.users.find({ age: { $eq: 30 } })`                     |
| `$gt`, `$gte`                    | Matches values greater than (`$gt`) or equal to (`$gte`) a specified value. | `db.users.find({ age: { $gt: 25 } })`              |
| `$lt`, `$lte`                    | Matches values less than (`$lt`) or equal to (`$lte`) a specified value.    | `db.users.find({ age: { $lt: 30 } })`              |
| `$ne`                            | Matches all values that are not equal to a specified value.  | `db.users.find({ status: { $ne: "inactive" } })`          |
| `$in`, `$nin`                    | Matches any of the values specified in an array (`$in`) or none of the values (`$nin`). | `db.users.find({ age: { $in: [25, 30] } })`  |
| `$exists`                        | Matches documents that contain the specified field.          | `db.users.find({ field: { $exists: true } })`             |
| **Logical Operators**            |                                                              |                                                            |
| `$and`, `$or`, `$not`            | Perform logical AND, OR, and NOT operations.                 | `db.users.find({ $and: [{ age: { $gt: 25 } }, { status: "active" }] })` |
| **Array Operators**              |                                                              |                                                            |
| `$elemMatch`                     | Matches documents that contain an array field with at least one element that matches all the specified criteria. | `db.users.find({ hobbies: { $elemMatch: { type: "Outdoor", skill: "Intermediate" } } })` |
| `$size`                          | Matches documents that have an array field with a specified number of elements. | `db.users.find({ hobbies: { $size: 3 } })`            |



---------------------------------------------------------------------------------------------------------------------------------


## Aggregation Framework Examples :- 

| Aggregation Stage             | Description                                                  | Example                                                |
|-------------------------------|--------------------------------------------------------------|--------------------------------------------------------|
| **`$match`**                  | Filters documents to pass only those that match the specified condition. | `db.sales.aggregate([{ $match: { status: "completed" } }])` |
| **`$project`**                | Reshapes documents by including or excluding fields, creating computed fields, or renaming fields. | `db.products.aggregate([{ $project: { name: 1, price: 1 } }])` |
| **`$group`**                  | Groups documents by a specified key and applies accumulator expressions. | `db.sales.aggregate([{ $group: { _id: "$product", totalSales: { $sum: "$quantity" } } }])` |
| **`$sort`**                   | Orders the documents based on the specified fields and sort order. | `db.users.aggregate([{ $sort: { age: -1 } }])` |
| **`$limit`**                  | Limits the number of documents passed to the next stage of the pipeline. | `db.logs.aggregate([{ $limit: 10 }])` |
| **`$skip`**                   | Skips a specified number of documents and passes the remaining documents to the next stage. | `db.logs.aggregate([{ $skip: 20 }])` |
| **`$unwind`**                 | Deconstructs an array field from the input documents and outputs one document for each element. | `db.orders.aggregate([{ $unwind: "$items" }])` |
| **`$lookup`**                 | Performs a left outer join to another collection and outputs documents with merged results. | `db.orders.aggregate([{ $lookup: { from: "products", localField: "productId", foreignField: "_id", as: "product" } }])` |
| **`$out`**                    | Writes the results of the aggregation pipeline to a specified collection. | `db.results.aggregate([{ $out: "aggregation_results" }])` |
| **`$facet`**                  | Allows for the execution of multiple pipelines within a single aggregation stage. | `db.sales.aggregate([{ $facet: { highSales: [{ $match: { totalSales: { $gte: 1000 } } }], lowSales: [{ $match: { totalSales: { $lt: 1000 } } }] } }])` |
| **`$addFields`**              | Adds new fields to documents.                                  | `db.sales.aggregate([{ $addFields: { discount: { $cond: { if: { $gte: ["$totalSales", 500] }, then: 0.1, else: 0 } } } }])` |



---------------------------------------------------------------------------------------------------------------------------------

## Indexing in MongoDB

-Indexing in MongoDB is the process of creating and maintaining data structures to improve the speed of data retrieval operations on a MongoDB database.
An index is a data structure that allows MongoDB to efficiently locate and access specific documents in a collection.
By creating indexes, you can significantly improve the performance of queries, especially for fields commonly used in filtering, sorting, and aggregating data.


- Index Types:
MongoDB supports various types of indexes, including single-field indexes, compound indexes (index on multiple fields), multikey indexes (index on arrays), text indexes, geospatial indexes, and hashed indexes.

- Creating Indexes:
You can create indexes using the createIndex() method or by specifying indexes in the collection's schema. Indexes can be created on single fields or combinations of fields.

db.collection.createIndex({ fieldName: 1 }); // Ascending index on a single field
db.collection.createIndex({ field1: 1, field2: -1 }); // Compound index on multiple fields

- Query Performance:
Indexes greatly enhance the performance of read operations, such as queries and aggregations, by allowing MongoDB to quickly locate and retrieve the relevant documents.

- Write Performance:
While indexes improve read performance, they can have a slight impact on write performance. When you insert, update, or delete documents, MongoDB may need to update corresponding indexes.

- Index Size:
Indexes consume disk space, and the size of the indexes depends on factors like the number and type of indexed fields

- Dropping Indexes:
You can drop indexes using the dropIndex() method. Be cautious when dropping indexes, as it may impact the performance of queries relying on those indexes.

db.collection.dropIndex("fieldName_1"); // Drop an index on a single field

- Index Use in Sorting:
Indexes can be used to optimize sorting operations. For example, if an index exists on a field used in sorting, MongoDB can efficiently perform the sort operation.

db.collection.find().sort({ fieldName: 1 }); // Sort using an ascending index





