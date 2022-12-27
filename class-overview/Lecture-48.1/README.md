# Lecture 48.1 - Track Zone Project Breakdown | Component Tree and Clock Logic

## Introduction

আমরা যখন কোনো প্রজেক্ট হাতে পাই তখন স্বাভাবিকভাবে আমাদের মস্তিষ্ক সবচেয়ে কঠিন যে লজিক সেটা নিয়ে চিন্তা করতে থাকে। যেমন এই প্রজেক্টে আমরা সবাই প্রথমেই কিভাবে টাইমজোন নিয়ে কাজ করবো, কিভাবে টাইম ডিফারেন্স বের করবো এসব চিন্তা করেই সময় নষ্ট করে ফেলেছি। নিয়ম হলো প্রথমে আমাদের প্রপার একটা প্ল্যানিং করতে হবে। কোনটার পর কোনটা করবো এসব। একবার প্ল্যানিং করে ফেললে কোড করা কোনো ব্যাপার না। কিন্তু প্ল্যানিং ছাড়া প্রজেক্ট শুরু করা যাবে, তবে শেষ করা যাবে না। এই লেকচারে আমরা আমাদের প্রজেক্ট রিকোয়ারমেন্টের উপর ভিত্তি করে আমাদের রিকোয়ারমেন্ট ব্রেকডাউন করবো, এরপর কম্পোনেন্ট ট্রী বানাবো। এছাড়া অন্য যা যা করা যায় করবো। যদি সময় থাকে এরপর আমরা কোডে যাবো।

## Requirements

আমরা আমাদের রিকোয়ারমেন্টসগুলো আগে নিয়ে আসি। আমাদের রিকোয়ারমেন্টগুলো হলো -

- User can set their own time and timezone, this clock can't be deleted only be edited
- User can create as many clock as they want
- Each clock has their own title or name
- Own Timezone
- Simple Events with time
- Time difference between users timezone and clock timezone in hour and minute
- User can edit or delete a clock
- Timezone could be UTC (standard), GMT, PST, EST
- only date-ns library is allowed for this project. rest of the logic should write by yourself
- Every data must be validated

এগুলো হলো আমাদের রিকোয়ারমেন্টস।

## Questions

কোনো রিকোয়ারমেন্টস পাওয়ার পর আমাদের কাজ হলো পুরো রিকোয়ারমেন্টস পড়ে ফেলা। আমরা আমাদের রিকোয়ারমেন্টস পড়ে নিলাম। শেষের যে পয়েন্ট দেয়া আছে ডাটা ভ্যালিডেশনের জন্য, সেটা ক্লায়েন্ট চাইলেও আমরা করবো, না চাইলেও আমরা করবো। কারণ একটা অ্যাপ্লিকেশনে অবশ্যই ডাটা ভ্যালিডেট করতে হবে।

এরপরের কাজ হলো যত ধরণের প্রশ্ন আছে তা তৈরি করা। এবং ক্লায়েন্ট থেকে সেগুলো ক্লিয়ার হয়ে নেয়া। এই রিকয়ারমেন্টের প্রশ্নগুলো আমরা তৈরি করে ফেলি তাহলে।

**প্রশ্ন-১** - এই অ্যাপ্লিকেশনে কতজন ইউজার থাকবে? এবং এখানে কোনো লগইন, রেজিস্ট্রেশনের প্রয়োজন আছে কিনা?  
_উত্তর_ - ক্লায়েন্ট জানালো এই অ্যাপ্লিকেশনে কোনো লগইন সিস্টেম লাগবে না। এবং এখানে কোনো সার্ভার বা ব্যাকএন্ড থাকবে না।

**প্রশ্ন-২** - যেহেতু এখানে কোনো সার্ভার থাকবে না, আহলে আমরা ডাটা সেইভ কোথায় করবো?  
_উত্তর_ - ক্লায়েন্ট আমাদের জানালো যে আমরা লোকাল স্টোরেজে ডাটা সেইভ করে রাখতে পারবো।

**প্রশ্ন-৩** - User can set their own time and timezone, আমরা কি টাইম কাস্টমাইজ করে সেট করবো নাকি শুধু টাইমজোন?  
_উত্তর_ - টাইম কাস্টমাইজ করা যাবে না। শুধু টাইমজোন সিলেক্ট করে টাইম সেট করা যাবে।

**প্রশ্ন-৪** - ইউজার যখন প্রথম অ্যাপ্লিকেশনে ঢুকবে তখন সে কি দেখবে? সে কি একটা ডিফল্ট ক্লক দেখবে যেটা আমাদের সিস্টেম থেকে নিয়ে দেখাবে? নাকি সে একটা টাইম সেট করার অপশন দেখবে?  
_উত্তর_ - যেকোনো একটা হতে পারে। যেটা সহজ আমাদের জন্য সেটা করলেই হবে।

এরকম আরো অনেক প্রশ্ন আসতে পারে। যতক্ষণ পর্যন্ত প্রশ্নের উত্তর আমরা পাবো না ততক্ষণ পর্যন্ত আমরা কাজে বসবো না। পৃথিবীতে কোনো রিকোয়ারমেন্টসই পূর্ণাঙ্গ থাকে না। সেটা আলোচনা করে করে আমাদের ক্লিয়ার করে নিতে হবে। যতক্ষণ ক্লিয়ার হবে না ততক্ষণ কাজ শুরু করা যাবে না।

## Requirements Breakdown

- We will have a local clock and a list of clocks
- We will create the initial clock from user timezone
- Clock object will look like
  - id
  - title
  - timezone
    - type (UTC, GMT, PST, EST)
    - offset (Only for UTC and GMT)
  - events
- Event object will look like
  - id
  - text
  - clockId
  - timezone
  - startTime
  - endTime
- We will use a clock object for local clock
- Use an array of clocks for other clocks
- We will use event id to create events inside clock

### Clock Features

- properties
- update clock
- delete clock
- calculate difference
- update events

### Event Features

- properties
- create event
- delete event
- update event
- filter event by clock
- get event by id
- get events by ids

## Create wireframe of UI

আমরা ui এর একটা ওয়্যারফ্রেম বানাবো। তার জন্য আমরা [wireframe.cc](https://wireframe.cc/) তে গিয়ে সহজেই সেটা বানাতে পারি।

## Component Tree

### App Component

![app.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361105359/qYcHsXUfO.jpg)

### Reusable components

![shared.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361210554/Enxr__Lh3.jpg)

### UI Components

![ui.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361295889/xZp23vZgg.jpg)

### Clock Display Component

![clock-display.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361350686/NJGDn-2CR.jpg)

### Clock Form Component

![clock-form.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361406489/EmwuVPdmE.jpg)

### Clock Actions Component

![clock-actions.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361479586/i1H4iQ9XJ.jpg)

### Create Event Form Component

![create-event-form.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361528283/656X1EuAB.jpg)

## Hooks

![hooks.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361563559/jV4KNrNwN.jpg)

## Data Flow

![data-flow.jpg](https://cdn.hashnode.com/res/hashnode/image/upload/v1666361597873/57EMROBND.jpg)
