TRUNCATE TABLE "Questions";
-- TRUNCATE TABLE "Questions", "Answers" RESTART IDENTITY;

INSERT INTO "Questions" ("Name", "Language") VALUES ('Jayden', 'C#');
INSERT INTO "Questions" ("Name", "Language") VALUES ('Caleb', 'Javascript' );
INSERT INTO "Questions" ("Name", "Language") VALUES ('Benson', 'HTML');
INSERT INTO "Questions" ("Name", "Language") VALUES ('Aisha', 'CSS');

-- INSERT INTO "Answers" ("QuestionsId", "CreatedAt", "Body") VALUES ('4', '2020-01-01 16:58:01', 'A styling language');
