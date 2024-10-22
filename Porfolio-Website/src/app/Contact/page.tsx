import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import contactusPic from "../../../public/images/contact-us.png"
import styles from './contact.module.css'

export default function Component() {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className={styles.title}>Contact Us</h2>
              <p className={styles.subtitle}>
                {"Fill out the form below and we'll get back to you as soon as possible."}
              </p>
            </div>
            <div className="space-y-4">
              <div className={styles.inputGroup}>
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label>Pronoun</Label>
                <Select>
                  <SelectTrigger aria-label="Pronoun">
                    <SelectValue placeholder="Select your pronoun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pronouns</SelectLabel>
                      <SelectItem value="he/him">He/Him</SelectItem>
                      <SelectItem value="she/her">She/Her</SelectItem>
                      <SelectItem value="they/them">They/Them</SelectItem>
                      <SelectItem value="prefer not to say">Prefer not to say</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className={styles.textarea} />
              </div>
              <Button type="submit" className={styles.button}>
                Send message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={contactusPic} alt={""} width={400} height={400}/>
      </div>
    </div>
  )
}