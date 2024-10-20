# Static Website Hosting

## Description

The purpose of the project was to create a S3 Bucket and upload images and host them on a static website.

## Steps Taken

**### 1. Created an S3 Bucket with a DNS name to link to a URL so that I can use Route53.**

![S3 Bucket Page](./screenshots/01_create_bucket.png)

**### 2. Confirmation that bucket was created.**

![Confirmation bucket created](./screenshots/02_confirm_bucket_created.png)

**### 3. On Properties tab at the bottom of the page the Static Hosting section.**

![Static Hosting bottom of page](./screenshots/03_static_hosting_bottom.png)

**### 4. Click into the Static Hosting section, enable static hosting and specify the index.html and error.html files.**

![Enable static hosting](./screenshots/04_enable_static_hosting.png)

**### 5. Confirmation Static Hosting enabled and URL generated.**

![Confirmation enabled and url](./screenshots/05_confirm_static_hosting.png)

**### 6. S3 Bucket, Objects tab load files and images.**

![Bucket upload files / images](./screenshots/06_upload_screen.png)

**### 7. Upload section.**

![Upload section](./screenshots/07_uploaded_objects.png)

**### 8. Confirmation of uploaded files and images.**

![Confirmation of upload](./screenshots/08_upload_objects_confirm.png)

**### 9. S3 Bucket, Properties in the Static Website Hosting section launch the URL in another tab. Received a HTTP Response Code 403 Forbidden as S3 Buckets are Private by default. I needed to grant permissions for any unauthenticated user and the perferred method is use a JSON bucket policy.**

![403 Forbidden](./screenshots/09_error_403.png)

**### 10. S3 Bucket, Permission tabs went to the bucket policy section.**

![Bucket policy](./screenshots/10_permission_bucket.png)

**### 11. Inserted a generic JSON bucket policy.**

![Generic bucket policy](./screenshots/11_permissions_bucket_template.png)

**### 12. Updated the "Resources" section with the current "ARN" (Amazon Resource Name) and save.**

![Updated the bucket policy](./screenshots/12_template_updated.png)

**### 13. Refresh the 403 Forbidden browser tab and the index.html page was rendered.**

![index page](./screenshots/13_index.png)

**### 14. Altered the URL to render the error.html page.**

![error page](./screenshots/14_error.png)

## Result

I successfully rendered a static website using an S3 bucket. 
Initially, I aimed to host the website with a custom DNS, so I followed the naming guidelines and gave the bucket a unique name. However, I mistakenly entered the URL in the bucket name incorrectly, which later caused issues when I tried to connect the bucket to Route53.

Since S3 buckets cannot be renamed without deletion, I decided to leave the project as is. I’ll take this experience as a lesson and pay closer attention in future projects to avoid similar mistakes.

Despite this, I was able to achieve the primary goal of hosting a static website on S3.
