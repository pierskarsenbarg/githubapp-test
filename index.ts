import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

const name = new random.RandomPet("petname");

