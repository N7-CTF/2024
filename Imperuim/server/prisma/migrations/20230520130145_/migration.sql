/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Commentaire` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Commentaire_email_key` ON `Commentaire`;

-- AlterTable
ALTER TABLE `Article` MODIFY `contenu` VARCHAR(9999) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Commentaire_id_key` ON `Commentaire`(`id`);
